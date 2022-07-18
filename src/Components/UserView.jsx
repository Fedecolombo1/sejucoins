import React, {useState, useEffect} from 'react'
import NavBar from './NavBar/NavBar'
import firebaseApp from "../firebase/credenciales";
import { collection, getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

function UservView({ user }) {
  console.log(user);
  return (
    <>
      <div className="row">
        <NavBar user={user}/>
          <div className="row align col-12 contUser">
            <div className="usuarioCard col-lg-4 col-12">
              <h1 className='col-12 tribu'>Tribu: {user.email}</h1>
              <h1 className='col-12 coins'>SejuCoins</h1>
              <h1 className="col-12 coins align"><img src="https://c.tenor.com/pPYpISB14vwAAAAC/coin.gif" className='col-2' /> {user.coins}</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default UservView