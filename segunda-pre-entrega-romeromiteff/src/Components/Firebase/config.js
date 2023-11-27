import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAiyezftPWYydxfa3VAsm6alBSWE858ImA",

  authDomain: "maquinasvialesdr.firebaseapp.com",

  projectId: "maquinasvialesdr",

  storageBucket: "maquinasvialesdr.appspot.com",

  messagingSenderId: "852614445099",

  appId: "1:852614445099:web:41954c8d054521b492926e",
};

const app = initializeApp(firebaseConfig);

export const initializeFirebase = () => app;
