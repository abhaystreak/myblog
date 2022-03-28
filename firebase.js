import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDhLNU0twYYtFdN7-F1kmwKkspqH0JHQYg",
    authDomain: "myblog-4d08f.firebaseapp.com",
    projectId: "myblog-4d08f",
    storageBucket: "myblog-4d08f.appspot.com",
    messagingSenderId: "109798786952",
    appId: "1:109798786952:web:af723be2d296fdc7675c3d",
    measurementId: "G-29VC2668WC"
  };
  // <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>

  // if(firebase.apps.length) firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()


  export {auth,db,storage}