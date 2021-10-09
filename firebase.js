import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDC7byzqm75G6uhg07_aPtMyDAmxrxZhPM',
  authDomain: 'amzn-clone-9643c.firebaseapp.com',
  projectId: 'amzn-clone-9643c',
  storageBucket: 'amzn-clone-9643c.appspot.com',
  messagingSenderId: '905501669175',
  appId: '1:905501669175:web:f63892dc6ebb4d2a844cb2',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
