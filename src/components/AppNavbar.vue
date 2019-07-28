<template>
	<nav class="app-navbar">
		<div class="app-navbar__inner jello">
			<router-link to="/" class="app-navbar__wordmark">Beyond Basics</router-link>
			<div class="app-navbar__pages">
				<router-link to="/about" class="app-navbar__page-link">About</router-link>
				<router-link to="/services" class="app-navbar__page-link">Services</router-link>
				<router-link to="/faq" class="app-navbar__page-link">FAQ</router-link>
			</div>
			<div class="app-navbar__cta">
				<router-link to="/contact" class="app-navbar__page-link">
					<ui-button>Contact Us</ui-button>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
import UiButton from '@/components/UiButton.vue';

export default {
	name: 'app-navbar',
	components: {
		UiButton
	}
}
</script>

<style lang="scss">
@import '../theme';

.app-navbar {
	position: relative;
	z-index: 2000;
	color: white;
	background-color: $blue1;
	a {
		color: white;
		text-decoration: none;
		white-space: nowrap;
	}
	&__inner {
		display: flex;
		padding: $gap1;
	}
	&__wordmark {
		display: flex;
		align-items: center;
		font-family: $header-fonts;
		font-size: 1.5em;
		font-weight: normal;
		padding: 0 $gap1;
		transition: color 400ms;
		&:hover, &:focus {
			color: darken(white, 15%);
		}
	}
	&__pages {
		display: flex;
		justify-content: flex-end;
		position: absolute;
		font-size: 1.2em;
		top: 100%;
		right: 0;
		left: 0;
		padding: $gap1 $gap2;
		margin: 0;
		text-shadow: $over-image-shadow;
		z-index: 1000;
	}
	&__page-link {
		display: flex;
		align-items: center;
		margin-left: $gap3;
		transition: color 400ms;
		&:hover, &:focus {
			color: darken(white, 15%);
		}
	}
	&__cta {
		margin-left: auto;
		margin-right: $gap1;
	}
	&__cta &__page-link {
		margin-left: $gap1;
	}
}
@media (min-width: 600px) {
	.app-navbar {
		&__pages {
			position: static;
			font-size: 1em;
			padding: 0;
			margin: 0 0 0 auto;
			text-shadow: none;
		}
		&__page-link {
			margin-left: $gap4;
		}
		&__cta {
			margin-left: 0;
		}
		&__cta &__page-link {
			margin-left: $gap4;
		}
	}
}
@media only print {
	.app-navbar {
		page-break-inside: avoid;
		background: none;
		color: black;
		text-shadow: none;
		a {
			color: black;
			text-shadow: none;
		}
		&__pages, &__cta {
			display: none;
		}
	}
}
</style>