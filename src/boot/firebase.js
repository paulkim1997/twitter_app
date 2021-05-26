import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6FUOxyRCvTeiMVotHIukCtiIS9Fy_GLA",
  authDomain: "qwitter-3a91c.firebaseapp.com",
  projectId: "qwitter-3a91c",
  storageBucket: "qwitter-3a91c.appspot.com",
  messagingSenderId: "36754549217",
  appId: "1:36754549217:web:f300ce33a1ec19b798caa0"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db