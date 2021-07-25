// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0JYmBRNmBIHsP9AkKtEcECcHxbHhPzdI",
  authDomain: "jaguar-e23c4.firebaseapp.com",
  projectId: "jaguar-e23c4",
  storageBucket: "jaguar-e23c4.appspot.com",
  messagingSenderId: "235057467730",
  appId: "1:235057467730:web:07dad5d1a2dca8a69c6a8b",
  measurementId: "G-BJXKCDB2H9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
