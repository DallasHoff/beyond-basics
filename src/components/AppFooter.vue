<template>
	<footer class="app-footer">
		<div class="app-footer__logos">
			<img src="@/assets/logos/hipaa.png" alt="HIPAA Compliant" />
			<img src="@/assets/logos/nys-wbs.png" alt="New York State Certified Women-Owned Business Enterprise" />
		</div>
		<p class="app-footer__footnote">Site by Dallas Hoffman | Copyright {{currentYear}} Beyond Basics Medical Billing Service, LLC</p>
	</footer>
</template>

<script>
export default {
	name: 'app-footer',
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
	}
}
</script>

<style lang="scss">
@import '../theme';

.app-footer {
	color: white;
	background-color: $blue1;
	border-top: $gap1 $green1 solid;
	overflow: hidden;
	a {
		color: white;
		&:hover {
			color: darken(white, 15%);
		}
	}
	&__logos {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: $gap3;
		img {
			width: auto;
			height: 10vw;
			max-height: 3.5rem;
			object-fit: contain;
			margin: 0 $gap1;
		}
	}
	&__footnote {
		font-size: .65em;
		text-align: center;
		margin: $gap3;
	}
}
@media only print {
	.app-footer {
		page-break-inside: avoid;
		color: black;
		background: none;
		border-top: 2px solid black;
		&__logos img {
			filter: invert(100%);
		}
	}
}
</style>