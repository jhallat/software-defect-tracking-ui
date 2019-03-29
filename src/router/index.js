import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import DefectPage from '../defect/DefectPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage
  }, {
    path: '/add-defect',
    name: 'Add Defect',
    component: DefectPage
  }]
});
