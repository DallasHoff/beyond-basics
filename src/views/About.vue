<template>
	<main class="view-about">
		<page-header heading="About Us" background-image="/img/backgrounds/skyscrapers.jpg"></page-header>
		<page-block>
			<p>Beyond Basics Medical Billing Service, LLC has been a consistent and trustworthy billing service located in Bloomfield, New York since 2000. Beyond Basics is a certified Women-Owned Business Enterprise that serves the surrounding Rochester, New York area as well as out-of-state clients.</p>
			<p>We are committed to providing services of the highest quality and maintaining open lines of communication with all clients. We work closely with you to ensure that we are making the best decisions on your behalf.</p>
			<p>We offer a wide range of services from basic bookkeeping to full scale bookkeeping and retrospective DRG auditing, and we work with a variety of software vendors both locally and nationally to process information as efficiently as possible.</p>
			<p>Our office is fully HIPAA compliant and protected by a secure firewall so that all information stays safe and confidential. All claims are sent directly to insurance carriers via the client/office software.</p>
			<p>We have over 65 years of combined experience in healthcare services, including experience in: </p>
			<div class="view-about__experience">
				<ui-icon-card>
					<fa slot="icon" icon="child" fixed-width></fa>
					Pediatrics
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="x-ray" fixed-width></fa>
					Internal Medicine
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="female" fixed-width></fa>
					Obstetrics and Gynecology
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="first-aid" fixed-width></fa>
					Urgent Care
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="microscope" fixed-width></fa>
					Durable Medical Equipment
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="user-friends" fixed-width></fa>
					Family Medicine
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="dumbbell" fixed-width></fa>
					Physical Therapy
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="shoe-prints" fixed-width></fa>
					Podiatry
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="diagnoses" fixed-width></fa>
					Dermatology
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="heartbeat" fixed-width></fa>
					Cardiology
				</ui-icon-card>
			</div>
			<p><router-link to="/contact">Contact us</router-link> today! We look forward to working with you.</p>
		</page-block>
	</main>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageBlock from '@/components/PageBlock.vue';
import UiIconCard from '@/components/UiIconCard.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChild, faXRay, faFemale, faFirstAid, faMicroscope, faUserFriends, faDumbbell, faShoePrints, faDiagnoses, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
library.add(faChild, faXRay, faFemale, faFirstAid, faMicroscope, faUserFriends, faDumbbell, faShoePrints, faDiagnoses, faHeartbeat)

export default {
	name: 'about',
	components: {
		PageHeader,
		PageBlock,
		UiIconCard
	}
}
</script>

<style lang="scss">
@import '../theme';

.view-about {
	&__experience {
		margin: $gap3 0;
	}
}
@media (min-width: 600px) {
	.view-about {
		&__experience {
			display: flex;
			flex-wrap: wrap;
			.ui-icon-card {
				width: calc(50% - 1rem);
				&:nth-child(odd) {
					margin-right: .5rem;
				}
				&:nth-child(even) {
					margin-left: .5rem;
				}
			}
		}
	}
}
</style>
