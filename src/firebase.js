import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOB68COZny0kzmlwW9CD2mY6S_R8wB-6A",
  authDomain: "marketplace-e6327.firebaseapp.com",
  projectId: "marketplace-e6327",
  storageBucket: "marketplace-e6327.appspot.com",
  messagingSenderId: "1077157506630",
  appId: "1:1077157506630:web:52a43bb3049429cb6ce447"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
//   authDomain: "fir-auth-1132.firebaseapp.com",
//   projectId: "fir-auth-1132",
//   storageBucket: "fir-auth-1132.appspot.com",
//   messagingSenderId: "1029021654707",
//   appId: "1:1029021654707:web:14aa4dee98449061701ac6",
//   measurementId: "G-MFP6M081T7",
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
