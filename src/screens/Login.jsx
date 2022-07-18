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
    <div className='container-fluid'>
      <div className="row align loginCont">
        <h1 className='col-12 align iniciarSesion'>"Iniciar Sesion"</h1>
        <form className='col-12 row align' onSubmit={submitHandler}>
          <div className="col-12 align">
            <label className='col-8 col-lg-4'>Email</label>
          </div>
          <div className="col-12 align">
            <input className='col-8 col-lg-4 align inpSesion' type="email" id='email'></input>
          </div>
          <div className="col-12 align">
             <label className='col-8 col-lg-4'>Contrasenia</label>
          </div>
          <div className="col-12 align">
            <input className='col-8 col-lg-4 align inpSesion' type="password" id='password'></input>
          </div>
          <div className="col-12 align">
            <input type="submit" className='col-8 col-lg-4 botonC' value='Iniciar sesion' />
          </div>
        </form>
      </div>
      
      {/* <button onClick={() => setIsRegistrando(!isRegistrando)}>{isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}</button> */}
      
    </div>
  )
}

export default Login