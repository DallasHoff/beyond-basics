import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('fa', FontAwesomeIcon)

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title + ' | Beyond Basics Medical Billing Service, LLC';
	} else {
		document.title = 'Beyond Basics Medical Billing Service, LLC';
	}
	next();
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
