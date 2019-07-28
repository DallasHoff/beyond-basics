<template>
	<button :type="type" class="ui-button" :class="modifierClass">
		<span class="ui-button__icon" v-if="$slots.icon">
			<slot name="icon"></slot>
		</span>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'ui-button',
	props: {
		modifier: {type: String},
		type: {type: String, default: 'button'}
	},
	computed: {
		modifierClass() {
			if (this.modifier) {
				var modifier = 'ui-button--' + this.modifier;
				return [modifier];
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import '../theme';

.ui-button {
	display: inline-block;
	position: relative;
	appearance: none;
	font-family: inherit;
	font-size: 1em;
	color: white;
	border: none;
	border-radius: .2em;
	background: $green1;
	padding: .3em .6em;
	margin: 0;
	transition: filter 400ms;
	& + & {
		margin-left: .2em;
	}
	a > & {
		cursor: pointer;
	}
	&--secondary {
		background: $blue1;
	}
	&--warning {
		background: $red1;
	}
	&:hover {
		filter: brightness(110%);
	}
	&:active {
		filter: brightness(95%);
		transition: none;
	}
	&[disabled] {
		opacity: 1;
		filter: grayscale(.7);
	}
	&__icon {
		margin-right: .4em;
	}
}
@media only print {
	.ui-button {
		page-break-inside: avoid;
		background: none;
		color: black;
		text-shadow: none;
		border: 1px solid black;
	}
}
</style>