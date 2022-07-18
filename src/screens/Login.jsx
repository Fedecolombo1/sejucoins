import React, { useState } from 'react'

import firebaseApp from "../firebase/credenciales"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

function Login() {
  const [isRegistrando, setIsRegistrando] = useState(false);

  function submitHandler(e){
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = "tribu";

    console.log('submit', email, password, rol);

    if(isRegistrando){
      //registrar
      
      registrarUser(email, password, rol);
    }else{
      //login
      signInWithEmailAndPassword(auth, email, password);
    }

  }

  async function registrarUser(email, password, rol){
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password).then((userFirebase) => {
      return userFirebase;
    })

    const docuRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`)
    setDoc(docuRef, {email: email, rol: rol, coins: 5})
  }
  
  function preCarga(){
    for(var i = 0; i<40; i++){
      registrarUser( `tribu${i}@seju.com`, `tribu${i}`, "tribu")
    }
  }
  return (
    <div>
      <h1 className='col-12 align'>"Iniciar Sesion"</h1>
      <form className='col-12 row align' onSubmit={submitHandler}>
        <label className='col-7 align'>
          Email
          <input type="email" id='email'></input>
        </label>
        <label className='col-7 align'>
          Contrasenia
          <input type="password" id='password'></input>
        </label>
        <input type="submit" value='Iniciar sesion' />
      </form>
      
      {/* <button onClick={() => setIsRegistrando(!isRegistrando)}>{isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}</button> */}
      
    </div>
  )
}

export default Login