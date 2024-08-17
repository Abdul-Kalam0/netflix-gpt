// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAo74inc6-Yu-rxR04IiovGQ9SlKLVrio",
  authDomain: "netflix-gpt-18301.firebaseapp.com",
  projectId: "netflix-gpt-18301",
  storageBucket: "netflix-gpt-18301.appspot.com",
  messagingSenderId: "1063333630457",
  appId: "1:1063333630457:web:04b60316df3a544ead2d28",
  measurementId: "G-ECQ10N4WH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); // from firebase doc
