import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkkFF0XhNZeWuDmOfEhsgNxyozZWtSNKs",
  authDomain: "mindbridge-demo.firebaseapp.com",
  projectId: "mindbridge-demo",
  storageBucket: "mindbridge-demo.appspot.com",
  messagingSenderId: "468910778171",
  appId: "1:468910778171:web:2c706d1837f87a892c8c7c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);