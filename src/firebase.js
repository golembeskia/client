import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyBknRGzY-raLdA_uNNNcfOWFngpd5jOsEQ',
  authDomain: 'ecommerce-efd31.firebaseapp.com',
  projectId: 'ecommerce-efd31',
  storageBucket: 'ecommerce-efd31.appspot.com',
  messagingSenderId: '363247529058',
  appId: '1:363247529058:web:a8ac3d23c44f567309b53b'
}
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
// export
// export default firebase;
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
