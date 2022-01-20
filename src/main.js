import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSwal from 'vue-swal'
import animated from 'animate.css'
Vue.config.productionTip = false
Vue.use(animated);
Vue.use(VueSwal);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
