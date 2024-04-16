import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCblCPnseal7UEVvElTYo8709Uq_SMago4",
  authDomain: "insta-clone-4b118.firebaseapp.com",
  projectId: "insta-clone-4b118",
  storageBucket: "insta-clone-4b118.appspot.com",
  messagingSenderId: "942982482437",
  appId: "1:942982482437:web:e3cc71b1fb89534ae3ea6c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); //db
const storage = getStorage(app);

export { app, auth, firestore, storage };
