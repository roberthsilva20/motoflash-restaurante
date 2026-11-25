import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBD9qiDcnYQJDGn850KUkMpiBatuP0DWT8",
  authDomain: "motoflash-b1396.firebaseapp.com",
  projectId: "motoflash-b1396",
  storageBucket: "motoflash-b1396.firebasestorage.app",
  messagingSenderId: "709365607477",
  appId: "1:709365607477:web:5a83bf82fafef1ca9e957c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
