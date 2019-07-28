<template>
	<main class="view-services">
		<page-header heading="Our Services" background-image="/img/backgrounds/two-meeting.jpg"></page-header>
		<page-block>
			<p>Beyond Basics Medical Billing Service, LLC will customize your service and fit your billing needs while maintaining a one-on-one relationship. No service or project is considered too small! We can handle as much or as little of the billing process as you want.</p>
			<p>We offer a range of services, including: </p>
			<div class="view-services__service-list">
				<ui-icon-card>
					<fa slot="icon" icon="user-check" fixed-width></fa>
					Patient billing and support
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="file-export" fixed-width></fa>
					Electronic claims submissions
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="file-invoice" fixed-width></fa>
					Follow up on denied and unpaid claims
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="file-invoice-dollar" fixed-width></fa>
					Accounts receivable
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="file-medical" fixed-width></fa>
					Retrospective DRG claim auditing
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="calendar-alt" fixed-width></fa>
					Monthly reporting
				</ui-icon-card>
				<ui-icon-card>
					<fa slot="icon" icon="piggy-bank" fixed-width></fa>
					Free quotes and competitive rates
				</ui-icon-card>
			</div>
		</page-block>
	</main>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageBlock from '@/components/PageBlock.vue';
import UiIconCard from '@/components/UiIconCard.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileExport, faUserCheck, faFileInvoice, faCalendarAlt, faFileInvoiceDollar, faFileMedical, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
library.add(faFileExport, faUserCheck, faFileInvoice, faCalendarAlt, faFileInvoiceDollar, faFileMedical, faPiggyBank)

export default {
	name: 'services',
	components: {
		PageHeader,
		PageBlock,
		UiIconCard
	}
}
</script>

<style lang="scss">
@import '../theme';

.view-services {
	&__service-list {
		margin-top: $gap3;
	}
}
@media (min-width: 600px) {
	.view-services {
		&__service-list {
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
