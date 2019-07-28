<template>
	<main class="view-home">
		<page-header heading="Medical Billing Made Simple" sub-heading="Beyond Basics Medical Billing Service, LLC" background-image="/img/backgrounds/doctor-form.jpg"></page-header>
		<page-block :index="0">
			<h2>Service Customized to You</h2>
			<p>From basic to advanced needs, we work closely with you to tailor our work to fit your specific case.</p>
			<fa slot="icon-right" icon="user-cog" mask="square" transform="shrink-8"></fa>
		</page-block>
		<page-block :index="1" colored>
			<fa slot="icon-left" icon="shield-alt" mask="square" transform="shrink-8"></fa>
			<h2>HIPAA Compliant</h2>
			<p>Our office is fully HIPAA compliant, meeting the latest security requirements. All information and claims are sent securely to insurance carriers.</p>
		</page-block>
		<page-block :index="2">
			<h2>Over 65 Years of Combined Experience</h2>
			<p>We have extensive experience with all areas of healthcare. We&rsquo;re ready to address all needs and concerns.</p>
			<fa slot="icon-right" icon="user-md" mask="square" transform="shrink-8"></fa>
		</page-block>
		<page-block :index="3" colored>
			<fa slot="icon-left" icon="certificate" mask="square" transform="shrink-8"></fa>
			<h2>Certified</h2>
			<p>We hold certifications in Professional Medical Coding and as a New York State Women-Owned Business Enterprise.</p>
		</page-block>
		<page-block :index="4">
			<h2>Let&rsquo;s Get Started!</h2>
			<p>Call us at (585) 624-7890 or <router-link to="/contact">send us a message</router-link>, and we&rsquo;ll happily answer any questions you have.</p>
			<fa slot="icon-right" icon="comments" mask="square" transform="shrink-8"></fa>
		</page-block>
	</main>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageBlock from '@/components/PageBlock.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquare, faUserCog, faShieldAlt, faUserMd, faCertificate, faComments } from '@fortawesome/free-solid-svg-icons'
library.add(faSquare, faUserCog, faShieldAlt, faUserMd, faCertificate, faComments)

export default {
	name: 'home',
	components: {
		PageHeader,
		PageBlock
	}
}
</script>
