import { firebase } from '@firebase/app'
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCgAV3GrLdNCmOCwQ60aEQuvZaQRaOKkFA',
    authDomain: 'so-fresh-so-clean-a04d9.firebaseapp.com',
    databaseURL: 'https://so-fresh-so-clean-a04d9.us-west2.firebasedatabase.app',
    projectId: 'so-fresh-so-clean-a04d9',
    storageBucket: 'so-fresh-so-clean-a04d9.appspot.com',
    messagingSenderId: '327309032688'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore.setLogLevel("debug")

}

export { firebase }