import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAz3lI_U2rTb2PaRcM7x94bHYj3Ox0D9Ic',
  authDomain: 'crwn-db-430b3.firebaseapp.com',
  databaseURL: 'https://crwn-db-430b3.firebaseio.com',
  projectId: 'crwn-db-430b3',
  storageBucket: '',
  messagingSenderId: '666441978996',
  appId: '1:666441978996:web:cd5a86b490387512'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
