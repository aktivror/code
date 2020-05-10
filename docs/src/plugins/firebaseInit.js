import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
  var firebaseConfig = {
      apiKey: "AIzaSyBAVezfJh2huI-9ZOQrpRHg9qg3A1FtIEw",
      authDomain: "aktivrorcheckin.firebaseapp.com",
      databaseURL: "https://aktivrorcheckin.firebaseio.com",
      projectId: "aktivrorcheckin",
      storageBucket: "aktivrorcheckin.appspot.com",
      messagingSenderId: "730377436750",
      appId: "1:730377436750:web:05529383864acc2ec7cd1f",
      measurementId: "G-KXCHE6EHB0"
    };
export default class FirbaseInit{

  constructor(){
  firebase.initializeApp(firebaseConfig)

  // firebase utils
  this.database = firebase.database();

  }

}