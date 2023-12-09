// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDXWKBmhp1WSDYnPH_Nn2_KJmAqTNVOryw",
	authDomain: "crud-react-pwa-25e17.firebaseapp.com",
	databaseURL:
		"https://crud-react-pwa-25e17-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "crud-react-pwa-25e17",
	storageBucket: "crud-react-pwa-25e17.appspot.com",
	messagingSenderId: "134125090964",
	appId: "1:134125090964:web:c22fdba73c76a103669c81",
	measurementId: "G-F1QTFMJQNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();
