<template>
	<div class="ui-icon-card">
		<div class="ui-icon-card__icon" v-if="$slots.icon">
			<slot name="icon"></slot>
		</div>
		<div class="ui-icon-card__body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ui-icon-card'
}
</script>

<style lang="scss">
@import '../theme';

.ui-icon-card {
	display: flex;
	color: $blue3;
	background-color: white;
	border-radius: .2em;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	margin-bottom: $gap2;
	overflow: hidden;
	&__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		background-color: $blue3;
		font-size: 1.5em;
		padding: $gap2;
	}
	&__body {
		display: flex;
		align-items: center;
		flex-grow: 1;
		padding: $gap2;
	}
}
@media only print {
	.ui-icon-card {
		page-break-inside: avoid;
		background: none;
		color: black;
		text-shadow: none;
		box-shadow: none;
		border: 1px solid black;
		&__icon {
			background: none;
			color: black;
			border-right: 1px solid black;
		}
	}
}
</style>