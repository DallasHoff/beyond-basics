const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const nodemailer = require('nodemailer');
const rp = require('request-promise');


exports.contactForm = functions.https.onRequest((request, response) => {
	return cors(request, response, () => {

		// Request params
		const userName = request.body.userName;
		const userEmail = request.body.userEmail;
		const emailBody = request.body.emailBody;
		const recaptchaToken = request.body.recaptchaToken;

		console.log(`Contact request from ${userName} (${userEmail}) receved.`);

		// Check request
		if (request.method !== 'POST' || !userName || !userEmail || !emailBody || !recaptchaToken) {
			response.status(400).send('Error: Invalid request.');
			return null;
		}

		// RECAPTCHA verification
		return rp({
			uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
			method: 'POST',
			formData: {
				secret: functions.config().recaptcha.secret,
				response: recaptchaToken
			},
			json: true
		}).then(verification => {
			console.log('Verification', verification);

			// Check for verification success
			if (verification.success !== true) {
				return Promise.reject('RECAPTCHA token is invalid');
			}

			// Send message to mail box
			// Prepare email
			const emailContent = `<p><b>${userName}</b> has contacted you through your website. Reply to them at <b>${userEmail}</b>. Their message follows: </p><hr /><div>${emailBody}</div>`;
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: functions.config().mailbox.user,
					pass: functions.config().mailbox.password
				}
			});
			const mailOptions = {
				from: `Beyond Basics <${functions.config().mailbox.user}>`,
				to: functions.config().mailbox.inbox,
				subject: `Message from ${userName} via Website`,
				html: emailContent
			};

			// Send email
			return transporter.sendMail(mailOptions, function(error, info) {
				if (error) {
					console.log('Failed to send email', error);
					response.status(500).send('Error: Could not send email.');
					return null;
				} else {
					console.log('Email sent: ' + info.response);
					response.status(200).send('Success: Email sent.');
					return null;
				}
			});
			
		}).catch(error => {
			console.log('Unable to verify RECAPTCHA', error);
			response.status(500).send('Error: Unable to verify RECAPTCHA.');
			return null;
		});

	});
});
