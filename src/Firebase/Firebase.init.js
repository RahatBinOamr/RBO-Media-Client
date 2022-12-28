
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCQ8tqfZqFxRWh3AlMMup_5Mp0ZyE8X2uU",
  authDomain: "rbo-media.firebaseapp.com",
  projectId: "rbo-media",
  storageBucket: "rbo-media.appspot.com",
  messagingSenderId: "758511267640",
  appId: "1:758511267640:web:35b102cd6d6ea686459bcd"
};

const app = initializeApp(firebaseConfig);
export default app;