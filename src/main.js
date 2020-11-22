import Vue from 'vue'
import {router} from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css';

Vue.use(VueAwesomeSwiper);

Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
