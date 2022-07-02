// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa-rQEpzzb_7-l0UcsNQlGiSa_2lW72UY",
  authDomain: "react-coder-9253e.firebaseapp.com",
  projectId: "react-coder-9253e",
  storageBucket: "react-coder-9253e.appspot.com",
  messagingSenderId: "141081395171",
  appId: "1:141081395171:web:3e28788924e183f2c42ad6"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

 export const collectionProductos = collection(db, 'productos');

 