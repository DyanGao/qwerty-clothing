import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAp8J9--QVvktPU8iI46H8YEwa0_mxKCgM",
  authDomain: "qwerty-clothing-db.firebaseapp.com",
  databaseURL: "https://qwerty-clothing-db.firebaseio.com",
  projectId: "qwerty-clothing-db",
  storageBucket: "",
  messagingSenderId: "609865360951",
  appId: "1:609865360951:web:457985b1e096c0a6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
