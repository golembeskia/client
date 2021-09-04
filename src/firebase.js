import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBknRGzY-raLdA_uNNNcfOWFngpd5jOsEQ",
  authDomain: "ecommerce-efd31.firebaseapp.com",
  projectId: "ecommerce-efd31",
  storageBucket: "ecommerce-efd31.appspot.com",
  messagingSenderId: "363247529058",
  appId: "1:363247529058:web:a8ac3d23c44f567309b53b",
};

var app = firebase.initializeApp(firebaseConfig);

// initialize firebase app
if (!app.length) {
  app = firebase.initializeApp(firebaseConfig);
}
// export
// export default firebase;
export const auth = firebase.auth(app);
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
