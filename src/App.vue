<template>
	<div id="app">
		<app-navbar></app-navbar>
		<transition name="fade" mode="out-in" appear>
			<router-view></router-view>
		</transition>
		<app-footer></app-footer>
	</div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
	name: 'App',
	components: {
		AppNavbar,
		AppFooter
	}
}
</script>

<style lang="scss">
/* Global CSS */
@import 'theme';
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
html {
	font-size: 18px;
	font-family: $body-fonts;
	word-wrap: break-word;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	text-size-adjust: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-width: 320px;
	color: $body;
	background: #f6f6f6;
}
.jello {
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
}

h1, h2, h3, h4, h5, h6 {
	display: block;
	font-family: $header-fonts;
	font-weight: bold;
}
h1 {font-size: 2.5em; margin: 0 0 1.6rem 0;}
h2 {font-size: 1.4em; margin: 0 0 .8rem 0;}
h3 {font-size: 1.2em; margin: 0 0 .8rem 0;}
h4 {font-size: 1em; margin: 0 0 .6rem 0;}
h5 {font-size: .8em; margin: 0 0 .4rem 0;}
h6 {font-size: .6em; margin: 0 0 .4rem 0;}
p {margin: 0 0 1em 0;}
img {display: block;}
address {font-style: normal;}
dialog {border: none;}
ul {list-style-type: square; padding-left: 1.5rem; margin: 1rem 0;}
li {margin: .25rem 0;}
label {display: block; color: $blue2;}

a {
	color: $blue2;
	transition: color 400ms;
	cursor: pointer;
}
a:hover {
	color: $blue1;
}
a:active {
	color: $green1;
	transition: none;
}
input[type="text"], input[type="number"], input[type="tel"], input[type="email"], input[type="password"], textarea {
	appearance: none;
	width: 100%;
	font-size: 1em;
	font-family: inherit;
	background-color: white;
	border: 1px solid #444444;
	border-radius: .2em;
	padding: .4em .6em;
	margin: .1rem 0 $gap1 0;
	box-shadow: inset 0 .2em .3em rgba(0,0,0,.2);
}
textarea {resize: vertical;}
[disabled] {opacity: .6;}
[v-cloak] {display: none !important;}

/* Vue Animations */
.fade-enter-active, .fade-leave-active {
	transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
.slide-enter-active, .slide-leave-active {
	transition: transform .3s, opacity .3s;
}
.slide-enter {
	transform: translateX(-100%);
	opacity: 0;
}
.slide-leave-to {
	transform: translateX(100%);
	opacity: 0;
}
.fade-up-enter-active, .fade-up-leave-active {
	transition: transform .3s, opacity .3s;
}
.fade-up-enter, .fade-up-leave-to {
	transform: translateY(120%);
	opacity: 0;
}

/* Responsive */
@media (min-width: 425px) {
	html {font-size: 18px;}
}
@media (min-width: 768px) {
	html {font-size: 20px;}
}
@media (min-width: 1024px) {
	html {font-size: 22px;}
}
</style>
