<template>
	<div class="ui-card">
		<div class="ui-card__header" v-if="$slots.heading">
			<slot name="heading"></slot>
			<div class="ui-card__icon">
				<slot name="icon"></slot>
			</div>
		</div>
		<div class="ui-card__body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ui-card'
}
</script>

<style lang="scss">
@import '../theme';

.ui-card {
	color: $body;
	background-color: white;
	border-radius: .2em;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	margin: 0 0 $gap2 0;
	overflow: hidden;
	&__header {
		position: relative;
		color: white;
		background-color: $blue2;
		padding: $gap2;
		overflow: hidden;
		h2 {
			margin: 0;
		}
	}
	&__icon {
		position: absolute;
		font-size: 4.5em;
		top: -.1em;
		right: -.05em;
		opacity: .6;
	}
	&__body {
		padding: $gap2;
	}
	&:last-child {
		margin-bottom: 0;
	}
}
@media only print {
	.ui-card {
		page-break-inside: avoid;
		background: none;
		color: black;
		text-shadow: none;
		box-shadow: none;
		border: 1px solid black;
		&__header {
			background: none;
			color: black;
			text-shadow: none;
			border-bottom: 1px solid black;
		}
	}
}
</style>