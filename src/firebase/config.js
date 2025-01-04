import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase config details
  apiKey: "AIzaSyCxfqMN3p88A4bnb36rBwYYrns7463v5Ns",
  authDomain: "adaa-jaipur-998c6.firebaseapp.com",
  projectId: "adaa-jaipur-998c6",
  storageBucket: "adaa-jaipur-998c6.appspot.com",
  messagingSenderId: "384737889140",
  appId: "1:384737889140:web:d8cb357100e9f3c601fa21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);