import firebase from 'firebase/app'
require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyCcgSHotYcGbPNthMTOGATo27XfB1udIuM",
    authDomain: "myfirstbaseproject-56656.firebaseapp.com",
    databaseURL: "https://myfirstbaseproject-56656.firebaseio.com",
    projectId: "myfirstbaseproject-56656",
    storageBucket: "myfirstbaseproject-56656.appspot.com",
    messagingSenderId: "153151149597",
    appId: "1:153151149597:web:ad8dc1a4b8d29caa0598f4",
    measurementId: "G-YXP593ZDCR"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;