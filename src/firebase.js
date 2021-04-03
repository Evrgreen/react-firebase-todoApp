import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyB_DExnMFvO8FEdHwRhOWVIurcvZdpWrEU',
  authDomain: 'todo-app-cp-bc6d8.firebaseapp.com',
  projectId: 'todo-app-cp-bc6d8',
  storageBucket: 'todo-app-cp-bc6d8.appspot.com',
  messagingSenderId: '528607599190',
  appId: '1:528607599190:web:eef61a1873aff9ea9d79f7',
  measurementId: 'G-4HH7CWSG0K',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
