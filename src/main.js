import Vue from 'vue'
import App from './component/App.vue'
import store from './store'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
 import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)

const routes = [
  {
    path: 'index',
    component: App
  },
];
const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
