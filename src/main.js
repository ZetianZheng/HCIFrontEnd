import Vue from 'vue'
import {router} from './router/index'
import App from './App.vue'
import store from './store/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper);

Vue.use(ElementUI);

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
