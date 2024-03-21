// firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyChYIzExoUsiahuQ2znVwbnj5aFGASmzGc",
    authDomain: "auto-industry-app.firebaseapp.com",
    projectId: "auto-industry-app",
    storageBucket: "auto-industry-app.appspot.com",
    messagingSenderId: "369168451751",
    appId: "1:369168451751:web:3ad6eb05744c4bc3f7b382"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;