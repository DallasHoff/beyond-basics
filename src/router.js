import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Faq from './views/Faq.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		meta: {title: 'About Us'},
		component: About
	},
	{
		path: '/services',
		name: 'services',
		meta: {title: 'Our Services'},
		component: Services
	},
	{
		path: '/faq',
		name: 'faq',
		meta: {title: 'Frequently Asked Questions'},
		component: Faq
	},
	{
		path: '/contact',
		name: 'contact',
		meta: {title: 'Contact Us'},
		component: Contact
	},
	{
		path: '*',
		component: Home
	}
	],
	scrollBehavior() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({x: 0, y: 0});
			}, 300);
		});
	}
})
