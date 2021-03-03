import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbYPvxMaECPwjgR06njRfTLFa_skZ9-Qo',
  authDomain: 'pantry-fe77c.firebaseapp.com',
  databaseURL: 'https://pantry-fe77c-default-rtdb.firebaseio.com',
  projectId: 'pantry-fe77c',
  storageBucket: 'pantry-fe77c.appspot.com',
  messagingSenderId: '235929136377',
  appId: '1:235929136377:web:f4687227f50dc7bd76c628',
  measurementId: 'G-7J6VBCW3SE',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
