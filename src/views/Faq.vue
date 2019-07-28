<template>
	<main class="view-faq">
		<page-header heading="Frequently Asked Questions" background-image="/img/backgrounds/talking-over-clipboard.jpg"></page-header>
		<page-block :index="0">
			<h2>How does your information get to Beyond Basics?</h2>
			<p>We offer a wide range of options to fit our service to your needs. We have the option of a courier service as well as modern technologies to transfer files. We will scan/email/fax information via secure HIPAA compliant methods of retrieval.</p>
		</page-block>
		<page-block :index="1" colored>
			<h2>How will Beyond Basics work for me?</h2>
			<p>We fully customize our services for each of our clients whether you are in need of basic “back end/denial” billing functions or if you are looking for full scale billing functions.</p>
		</page-block>
		<page-block :index="2">
			<h2>How long is the delay in my payments during a transition to Beyond Basics?</h2>
			<p>Typically, we say to allow about a week for the transition to fully take place. Then, we are able to start submitting claims for you.</p>
		</page-block>
		<page-block :index="3" colored>
			<h2>Will Beyond Basics handle my insurance checks?</h2>
			<p>No, we do not handle insurance checks of any kind. We like to have the office maintain their own checks and copy any check/EOB that it records.</p>
		</page-block>
		<page-block :index="4">
			<h2>How does Beyond Basics follow up on denied claims?</h2>
			<p>We work on all denied claims as they come through from the carriers. When posting insurance payments, any denied claims are researched at that point and the appropriate actions are taken: re-submit, bill patient, etc. The A/R is also worked once a month to follow up on claims that are unpaid.</p>
		</page-block>
		<page-block :index="5" colored>
			<h2>How does patient billing get handled?</h2>
			<p>We allow this to be customized by each individual office. You can decide to print the statements and have us take the calls, or we can process patient billing from start to finish. Patients can call our direct line for billing questions to take the office staff out of the loop.</p>
			<p>We also work closely with a collection agency local to Rochester, NY should you find that you need collection services on delinquent accounts (New York accounts only).</p>
		</page-block>
		<page-block :index="6">
			<h2>Does Beyond Basics take on clients or offices that submit paper claims?</h2>
			<p>No, we do not currently take any clients that submit paper claims.</p>
		</page-block>
	</main>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageBlock from '@/components/PageBlock.vue';

export default {
	name: 'faq',
	components: {
		PageHeader,
		PageBlock
	}
}
</script>
