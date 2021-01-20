import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyA49CWvodWCO7gjgZl72ghmsK--ghEcBmE",
        authDomain: "alalona-bolsos.firebaseapp.com",
        projectId: "alalona-bolsos",
        storageBucket: "alalona-bolsos.appspot.com",
        messagingSenderId: "736906774747",
        appId: "1:736906774747:web:12d6957d0e92038aea24fe"
      })

export function getFirebase (){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}