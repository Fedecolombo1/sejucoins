import React, {useState, useEffect} from 'react'
import NavBar from './NavBar/NavBar'
import firebaseApp from "../firebase/credenciales";
import { collection, getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

function UservView({ user }) {
  console.log(user);
  return (
    <div>
      <NavBar user={user}/>
      <div className="row align col-12">
        <div className="usuarioCard col-4">
          <h1 className='col-12'>Tribu: {user.email}</h1>
          <h1 className='col-12'>SejuCoins: {user.coins}</h1>
        </div>
      </div>
    </div>
  )
}

export default UservView