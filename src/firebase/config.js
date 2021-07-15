import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCP2p2rxa7usdpnzaFgOmXonRBMCcDhtQU",
    authDomain: "ana-i-vedran.firebaseapp.com",
    projectId: "ana-i-vedran",
    storageBucket: "ana-i-vedran.appspot.com",
    messagingSenderId: "416038659080",
    appId: "1:416038659080:web:53d417347e1e1e121a5dbd"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };