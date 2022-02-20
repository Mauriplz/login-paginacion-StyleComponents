import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB117jhJEjvo8VqwkwlLrbfB0xM6zFLLGU",
    authDomain: "prueba-laliga.firebaseapp.com",
    projectId: "prueba-laliga",
    storageBucket: "prueba-laliga.appspot.com",
    messagingSenderId: "691627241625",
    appId: "1:691627241625:web:2cac5bba679bf4f39e4808"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  export {
      auth,
      googleProvider
  }