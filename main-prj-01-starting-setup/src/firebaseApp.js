import firebase from "firebase/app"


var firebaseConfig = {
    apiKey: "",
    authDomain: "vue-http-demo-9d61e.firebaseapp.com",
    databaseURL: "https://vue-http-demo-9d61e-default-rtdb.firebaseio.com",
    projectId: "vue-http-demo-9d61e",
    storageBucket: "vue-http-demo-9d61e.appspot.com",
    messagingSenderId: "816760503124",
    appId: "1:816760503124:web:a932d9317e46f25e7566c1"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp