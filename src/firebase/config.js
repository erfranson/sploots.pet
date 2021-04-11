// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDANDyEb-LZn9OqcOECf93oLL48J1O2sWQ",
    authDomain: "sploots-d050d.firebaseapp.com",
    projectId: "sploots-d050d",
    storageBucket: "sploots-d050d.appspot.com",
    messagingSenderId: "666246994336",
    appId: "1:666246994336:web:e6c1f5abd0467a63d22cc5",
    measurementId: "G-173Y64V43X"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }