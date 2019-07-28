<template>
	<section class="page-block" :class="{'page-block--colored': setColored, 'page-block--shadows': showMask}" :style="blockStyles">
		<img :src="backgroundImage" alt="" class="page-block__image-sample" v-if="backgroundImage && !removeSample" @load="showBackgroundImage" />
		<div class="page-block__mask" :class="{'page-header__mask--visible': showMask}"></div>
		<transition name="slide" appear>
			<div class="page-block__content jello" :style="{'transition-delay': (300 + (index * 100)) + 'ms'}">
				<div class="page-block__icon-area page-block__icon-area--left" v-if="$slots['icon-left']">
					<slot name="icon-left"></slot>
				</div>
				<div class="page-block__main-content">
					<slot></slot>
				</div>
				<div class="page-block__icon-area page-block__icon-area--right" v-if="$slots['icon-right']">
					<slot name="icon-right"></slot>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>
export default {
	name: 'page-block',
	props: {
		colored: {type: Boolean, default: false},
		backgroundImage: {type: String, default: ''},
		index: {type: Number, default: 0}
	},
	data() {
		return {
			showMask: false,
			blockStyles: {},
			removeSample: false
		}
	},
	computed: {
		setColored() {
			if (this.colored || this.backgroundImage) {
				return true;
			}
			return false;
		}
	},
	methods: {
		showBackgroundImage() {
			this.blockStyles = {'background-image': 'url(' + this.backgroundImage + ')'};
			this.showMask = true;
			this.removeSample = true;
		}
	}
}
</script>

<style lang="scss">
@import '../theme';

.page-block {
	position: relative;
	color: $blue3;
	padding: $gap3;
	&__content {
		display: flex;
		position: relative;
		transition-delay: 300ms;
	}
	&__main-content {
		flex-grow: 1;
		max-width: 100%;
	}
	&__icon-area {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 5em;
		color: $blue3;
		&--left {
			margin-right: $gap3;
		}
		&--right {
			margin-left: $gap3;
		}
	}
	&--colored {
		color: white;
		background-color: $blue3;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		.page-block__icon-area {
			color: white;
		}
	}
	&--shadows {
		text-shadow: $over-image-shadow;
	}
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
	&__image-sample {display: none;}
	p:last-child {
		margin-bottom: 0;
	}
}
@media (min-width: 425px) {
	.page-block {
		padding: $gap4;
		&__icon-area {
			&--left {
				margin-right: $gap4;
			}
			&--right {
				margin-left: $gap4;
			}
		}
	}
}
@media (min-width: 768px) {
	.page-block {
		padding: $gap5;
		&__icon-area {
			&--left {
				margin-right: $gap5;
			}
			&--right {
				margin-left: $gap5;
			}
		}
	}
}
@media (min-width: 1366px) {
	.page-block--colored {
		background-attachment: fixed;
	}
}
@media only print {
	.page-block {
		background: none;
		color: black;
		text-shadow: none;
		&__icon-area {
			display: none;
		}
	}
}
</style>