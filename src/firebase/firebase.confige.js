// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBROldtyQojTBHWZLzeJnJh4PqHJLPsqQE",
  authDomain: "coffee-store-89857.firebaseapp.com",
  projectId: "coffee-store-89857",
  storageBucket: "coffee-store-89857.firebasestorage.app",
  messagingSenderId: "184381124744",
  appId: "1:184381124744:web:142a5cd0fa91b93366af3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;