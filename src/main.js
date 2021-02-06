import '@oruga-ui/oruga/dist/oruga.css'
import './assets/common.css';

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import OrugaForm from "./components/OrugaForm.vue";

Vue.config.productionTip = false

library.add(fas);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.component('oruga-form', OrugaForm);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
