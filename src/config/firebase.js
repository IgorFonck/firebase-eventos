import firebase from 'firebase';
 
const firebaseConfig = {
    apiKey: "AIzaSyDB_3q9qrKS1ggg3KMo3H6KFB_bjuh1oPM",
    authDomain: "eventos-33081.firebaseapp.com",
    databaseURL: "https://eventos-33081.firebaseio.com",
    projectId: "eventos-33081",
    storageBucket: "eventos-33081.appspot.com",
    messagingSenderId: "538787903142",
    appId: "1:538787903142:web:176ad9c2c9e54d1841a667"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);