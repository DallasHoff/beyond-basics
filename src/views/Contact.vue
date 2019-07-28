<template>
	<main class="view-contact">
		<page-header heading="Get in Contact" background-image="/img/backgrounds/talking-on-phone.jpg"></page-header>
		<page-block>
			<ui-card id="view-contact__email-card">
				<h2 slot="heading">Email</h2>
				<fa icon="at" slot="icon"></fa>
				<p>Send us an email at <a href="mailto:mail@beyondbasicsmbs.com">mail@beyondbasicsmbs.com</a> or using the contact form below, and we will follow up with you as soon as we can.</p>
				<transition name="fade">
					<form @submit.prevent="sendEmail" v-if="emailSuccess === false">
						<label>Your Name
							<input type="text" v-model="userName" placeholder="Jane Doe" required :disabled="sendingEmail" />
						</label>
						<label>Your Email Address
							<input type="email" v-model="userEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="jane@example.com" required :disabled="sendingEmail" />
						</label>
						<label>Message
							<textarea rows="12" v-model="emailBody" required :disabled="sendingEmail"></textarea>
						</label>
						<p class="view-contact__form-footnote">Your name and email address will only be used for the purpose of replying to this message. This message is secure and confidential.</p>
						<vue-recaptcha class="view-contact__recaptcha" ref="recaptcha" sitekey="6Lfh1GgUAAAAAGEQw_6rHK3xRLSQpsXRultzhIbL" @verify="recaptchaVerify" @expired="recaptchaExpire"></vue-recaptcha>
						<ui-button type="submit" class="view-contact__form-submit" :disabled="sendingEmail || !recaptchaVerified">
							<fa icon="spinner" slot="icon" pulse v-if="sendingEmail"></fa>
							<fa icon="paper-plane" slot="icon" v-else></fa>
							<span v-if="sendingEmail">Sending&hellip;</span>
							<span v-else>Send Email</span>
						</ui-button>
					</form>
				</transition>
				<transition name="fade">
					<div class="view-contact__send-message" :class="{'view-contact__send-message--error': emailError}" v-if="emailStatus">
						<div class="view-contact__send-message-icon" v-if="emailError">
							<fa icon="exclamation-triangle"></fa>
						</div>
						<div class="view-contact__send-message-icon" v-else>
							<fa icon="check-circle"></fa>
						</div>
						<div class="view-contact__send-message-content">{{emailStatus}}</div>
					</div>
				</transition>
			</ui-card>
			<ui-card>
				<h2 slot="heading">Phone Number</h2>
				<fa icon="phone" slot="icon"></fa>
				(585) 624-7890
			</ui-card>
			<ui-card>
				<h2 slot="heading">Fax Number</h2>
				<fa icon="fax" slot="icon"></fa>
				(877) 588-7456
			</ui-card>
			<ui-card>
				<h2 slot="heading">Postal Address</h2>
				<fa icon="envelope" slot="icon"></fa>
				<address>
					Beyond Basics Medical Billing Service, LLC<br />
					2155 State Route 65<br />
					Bloomfield, NY 14469
				</address>
			</ui-card>
		</page-block>
	</main>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageBlock from '@/components/PageBlock.vue';
import UiCard from '@/components/UiCard.vue';
import UiButton from '@/components/UiButton.vue';
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faAt, faEnvelope, faFax, faPaperPlane, faSpinner, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faAt, faEnvelope, faFax, faPaperPlane, faSpinner, faExclamationTriangle, faCheckCircle)

export default {
	name: 'contact',
	data() {
		return {
			sendingEmail: false,
			emailError: false,
			emailStatus: "",
			emailSuccess: false,
			userName: "",
			userEmail: "",
			emailBody: "",
			recaptchaVerified: false,
			recaptchaToken: null
		}
	},
	methods: {
		recaptchaVerify(response) {
			this.recaptchaToken = response;
			this.recaptchaVerified = true;
		},
		recaptchaExpire() {
			this.recaptchaToken = null;
			this.recaptchaVerified = false;
		},
		recaptchaReset() {
			this.$refs.recaptcha.reset();
			this.recaptchaExpire();
		},
		sendEmail() {
			this.emailError = false;
			this.emailStatus = "";
			this.sendingEmail = true;
			var userName = this.userName;
			var userEmail = this.userEmail;
			var emailBody = this.emailBody;
			var recaptchaToken = this.recaptchaToken;
			axios.post('https://us-central1-beyondbasicsweb.cloudfunctions.net/contactForm', {
				userName,
				userEmail,
				emailBody,
				recaptchaToken
			}).then(() => {
				this.sendingEmail = false;
				this.emailSuccess = true;
				this.emailStatus = "Message sent! We will send you an email in reply soon.";
				document.getElementById('view-contact__email-card').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
			}).catch(error => {
				this.sendingEmail = false;
				this.emailStatus = "Error: We were unable to send the message. Please try again a bit later.";
				this.emailError = true;
				this.recaptchaReset();
				// eslint-disable-next-line
				console.log(error);
			});
		}
	},
	components: {
		PageHeader,
		PageBlock,
		UiCard,
		UiButton,
		VueRecaptcha
	}
}
</script>

<style lang="scss">
@import '../theme';

.view-contact {
	&__form-footnote {
		font-size: .7em;
		margin: 0 0 .8em 0;
	}
	&__recaptcha {
		transform: scale(.75);
		transform-origin: 0 0;
	}
	&__send-message {
		display: flex;
		font-size: .9em;
		margin: $gap2 0 0 0;
		color: darken($green1, 10%);
		border-radius: .2em;
		background-color: lighten($green1, 55%);
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 2px rgba(0,0,0,0.36);
		overflow: hidden;
		&-icon {
			display: flex;
			align-items: center;
			font-size: 1.2em;
			padding: 0 $gap1;
			color: white;
			background-color: $green1;
		}
		&--error {
			color: $red1;
			background-color: lighten($red1, 30%);
		}
		&--error &-icon {
			background-color: $red1;
		}
		&-content {
			display: flex;
			align-items: center;
			padding: $gap1;
		}
	}
}
@media (min-width: 360px) {
	.view-contact {
		&__recaptcha {
			transform: scale(.85);
		}
	}
}
@media (min-width: 425px) {
	.view-contact {
		&__recaptcha {
			transform: none;
			margin-bottom: .8em;
		}
	}
}
@media only print {
	.view-contact__recaptcha {
		display: none;
	}
}
</style>