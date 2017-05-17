// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import $ from 'jquery';

import zh_CN from 'assets/js/zh_CN';  //汉化包
import VeeValidate from 'vee-validate';
import Validator from 'assets/js/customValidate';
Validator.addLocale(zh_CN); //添加汉化



// Vue.use(VeeValidate, {
//   locale: 'zh_CN'
// });

const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
};
Vue.use(VeeValidate, config);



Vue.use(VueRouter);

import routerOption from './router.js'

const router = new VueRouter(routerOption);
// 现在我们可以启动应用了！


/*过滤器*/
//处理名字
Vue.filter('formatName', function (value) {
  if (value.length > 2) {
    value = value.replace(value.substring(1, value.length - 1), '*');
  }
  return value;
});

/* eslint-disable no-new */
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')


// router.start(App, '#app');
