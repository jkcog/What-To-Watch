import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/store';
import Routes from './routes';
import './styles/styles.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
