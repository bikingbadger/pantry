import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDbYPvxMaECPwjgR06njRfTLFa_skZ9-Qo',
  authDomain: 'pantry-fe77c.firebaseapp.com',
  databaseURL: 'https://pantry-fe77c-default-rtdb.firebaseio.com',
  projectId: 'pantry-fe77c',
  storageBucket: 'pantry-fe77c.appspot.com',
  messagingSenderId: '235929136377',
  appId: '1:235929136377:web:23a498fc887466ce76c628',
  measurementId: 'G-S4ER2JYTKZ',
};
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount('#app');
