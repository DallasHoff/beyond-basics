<template>
	<header class="page-header" :style="headerStyles">
		<img :src="backgroundImage" alt="" class="page-header__image-sample" v-if="backgroundImage && !removeSample" @load="showBackgroundImage" />
		<div class="page-header__mask" :class="{'page-header__mask--visible': showMask}"></div>
		<transition name="fade-up" appear>
			<h1 class="page-header__heading jello" v-if="heading" :style="h1Styles">{{heading}}</h1>
		</transition>
		<transition name="fade-up" appear>
			<p class="page-header__sub-heading jello" v-if="subHeading">{{subHeading}}</p>
		</transition>
		<transition name="fade-up" appear>
			<nav class="page-header__buttons jello" v-if="$slots.default">
				<slot></slot>
			</nav>
		</transition>
	</header>
</template>

<script>
export default {
	name: 'page-header',
	props: ['backgroundImage', 'heading', 'subHeading'],
	data() {
		return {
			showMask: false,
			headerStyles: {},
			h1Styles: {},
			removeSample: false
		}
	},
	methods: {
		showBackgroundImage() {
			this.headerStyles = {'background-image': 'url(' + this.backgroundImage + ')'};
			this.showMask = true;
			this.removeSample = true;
		}
	},
	created() {
		if (this.heading.length < 16) {
			this.h1Styles = {'font-size': '3.2em'};
		}
	}
}
</script>

<style lang="scss">
@import '../theme';

.page-header {
	background-color: $blue1;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 20rem;
	text-align: center;
	color: white;
	text-shadow: $over-image-shadow;
	padding: $gap2;
	&__image-sample {display: none;}
	&__mask {
		visibility: hidden;
		position: absolute;
		top: 0; left: 0; right: 0; bottom: 0;
		background-color: $blue1;
		transition: background-color 1000ms;
		&--visible {
			visibility: visible;
			background-color: $image-mask;
		}
	}
	&__heading {
		position: relative;
		margin: 0 0 $gap2 0;
		transition-delay: .2s;
	}
	&__sub-heading {
		position: relative;
		font-size: 1.2em;
		font-weight: bold;
		margin: 0 0 $gap3 0;
		transition-delay: .4s;
	}
	&__buttons {
		font-size: 1.2em;
		transition-delay: .6s;
		button {
			box-shadow: $over-image-shadow;
			padding-left: $gap4;
			padding-right: $gap4;
		}
	}
}
@media (min-width: 525px) {
	.page-header {
		&__buttons {
			display: none;
		}
	}
}
@media (min-width: 1366px) {
	.page-header {
		background-attachment: fixed;
	}
}
@media only print {
	.page-header {
		page-break-inside: avoid;
		height: auto;
		padding-top: $gap4;
		background: none;
		color: black;
		text-shadow: none;
		border-top: 2px solid black;
		border-bottom: 2px solid black;
	}
}
</style>