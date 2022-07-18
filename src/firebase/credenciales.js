// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyCumzmI0jRik1XzQVEEVqx30yzMdk-YRZs",
  authDomain: "sejucoins.firebaseapp.com",
  projectId: "sejucoins",
  storageBucket: "sejucoins.appspot.com",
  messagingSenderId: "982311013804",
  appId: "1:982311013804:web:9e301e5417583061f17e09"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;


