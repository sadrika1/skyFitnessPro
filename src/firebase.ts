/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCZ-T7GGXFj79VGYQYB6Ff4E-vddPHVb8Q",
  authDomain: "fitnes-bro.firebaseapp.com",
  databaseURL:
    "https://fitnes-bro-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "fitnes-bro",
  storageBucket: "fitnes-bro.appspot.com",
  messagingSenderId: "863868276370",
  appId: "1:863868276370:web:289ae91c6ceddf3387604b",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
