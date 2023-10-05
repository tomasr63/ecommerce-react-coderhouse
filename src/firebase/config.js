import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbNGmMbgniJsLir58SfQm6Lu58xdTQg9U",
  authDomain: "coderhouse-ecommerce-fdc19.firebaseapp.com",
  projectId: "coderhouse-ecommerce-fdc19",
  storageBucket: "coderhouse-ecommerce-fdc19.appspot.com",
  messagingSenderId: "534826771261",
  appId: "1:534826771261:web:dcae52fe8672ac3b1c1b54"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);