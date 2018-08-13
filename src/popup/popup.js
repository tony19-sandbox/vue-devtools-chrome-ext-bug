import devtools from '@vue/devtools';
import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';

if (process.env.NODE_ENV === 'development') {
  devtools.connect();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
