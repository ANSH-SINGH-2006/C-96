import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAn1VYO_vnLAKZqtp0GRxLpA6UHY7QRu1A",
    authDomain: "passwordencrypterx.firebaseapp.com",
    projectId: "passwordencrypterx",
    storageBucket: "passwordencrypterx.appspot.com",
    messagingSenderId: "786306661778",
    appId: "1:786306661778:web:16922d7144c508cacfd54b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();