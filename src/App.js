import React, {useState} from "react";

import "./styles/global.css";
//Importamos la aplicación/credenciales
import firebaseApp from "./firebase/credenciales";

import Home from './screens/Home';
import Login from './screens/Login';

import {getAuth, onAuthStateChanged} from "firebase/auth"
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid){
    const docuRef = await doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = {
      rol: docuCifrada.data().rol,
      coins: docuCifrada.data().coins
    };

    return infoFinal;
  }

  function setUserFirebase(userFirebase){
    getRol(userFirebase.uid).then((info) => {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
        rol: info.rol,
        coins: info.coins
      };
      setUser(userData);
    });
  }

  onAuthStateChanged(auth, userFirebase => {
    if(userFirebase){
      if(!user){
        setUserFirebase(userFirebase);
      }
    } else{
      setUser(null);
    }
  })

  return (
    <div>
      { user ? <Home user={user}/> : <Login />}
    </div>
  );
}

export default App;
