import Vue from 'vue';
import App from './App.vue';

const root = new Vue({
	render: createElement => createElement(App)
}).$mount('#app');
