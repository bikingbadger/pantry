import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from './firebase.js';

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(firebase);
    app.use(store);
    app.use(router);

    app.mount('#app');
  }
});
