
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRHlZJLKrK6ZpAjw9phV5tRBT5fySEEJo",
  authDomain: "job-task-ph.firebaseapp.com",
  projectId: "job-task-ph",
  storageBucket: "job-task-ph.appspot.com",
  messagingSenderId: "912701573262",
  appId: "1:912701573262:web:a59f43b0b0491d0b5521df",
  measurementId: "G-NN596N61XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);