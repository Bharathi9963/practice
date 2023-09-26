// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBFnqBA_Y5NfGatM3O1bJvw3UmDtBEnedc",
  authDomain: "hospitalapp-8dce5.firebaseapp.com",
  projectId: "hospitalapp-8dce5",
  storageBucket: "hospitalapp-8dce5.appspot.com",
  messagingSenderId: "332939487421",
  appId: "1:332939487421:web:671c322fe908910e5cafd4",
  measurementId: "G-YWFF6FW6X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);