// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk9kOJtG5F9R45zf8AbG4QACHPQTq72C0",
  authDomain: "expense-tracker-app-1ead6.firebaseapp.com",
  projectId: "expense-tracker-app-1ead6",
  storageBucket: "expense-tracker-app-1ead6.firebasestorage.app",
  messagingSenderId: "784361390792",
  appId: "1:784361390792:web:57ae0a34f2fb58c18b1bfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
