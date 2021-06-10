import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC5RXuLGW-g2lSbRsJjEkjQC1duAp8MS9I",
  authDomain: "fir-blogs-2c462.firebaseapp.com",
  projectId: "fir-blogs-2c462",
  storageBucket: "fir-blogs-2c462.appspot.com",
  messagingSenderId: "761743732194",
  appId: "1:761743732194:web:a356b89fc932ef5e94ddbb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();