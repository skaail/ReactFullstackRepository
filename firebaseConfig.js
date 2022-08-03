import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAwnvOR1IIOHbDkCe8OWjZUWgKrfEYqRhA",
  authDomain: "vaga-fullstack.firebaseapp.com",
  projectId: "vaga-fullstack",
  storageBucket: "vaga-fullstack.appspot.com",
  messagingSenderId: "66642449602",
  appId: "1:66642449602:web:d3cb420f0012ba1f49175b",
  measurementId: "G-9634MH89XZ"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)