import React from 'react'

import firebaseApp from "../firebase/credenciales"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom';

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

function Registrar() {
    function submitHandler(e){
        e.preventDefault();
    
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rol = "tribu";
        const numTribu = e.target.elements.numTribu.value;
    
        console.log('submit', email, password, rol, numTribu);
    
        registrarUser(email, password, rol, numTribu);
        alert("Tribu creada con exito");
      }
    
      async function registrarUser(email, password, rol, numTribu){
        const infoUsuario = await createUserWithEmailAndPassword(auth, email, password, numTribu).then((userFirebase) => {
          return userFirebase;
        })
    
        const docuRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`)
        setDoc(docuRef, {email: email, rol: rol, coins: 200, numTribu: numTribu})
      }

  return (
    <>
        <div className='container-fluid'>
            <div className="row align loginCont">
                <h1 className='col-12 align iniciarSesion'>Registrar Tribu</h1>
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
                    <label className='col-8 col-lg-4'>Numero de Tribu</label>
                </div>
                <div className="col-12 align">
                    <input className='col-8 col-lg-4 align inpSesion' type='number' id='numTribu'></input>
                </div>
                <div className="col-12 align">
                    <input type="submit" className='col-8 col-lg-4 botonC' value='Registar' />
                </div>
                <Link className="col-8 col-lg-4 botonC align" style={{marginTop: '10px'}} to="/">
                <h1 className="">Volver al inicio</h1>
                </Link>
                </form>
            </div>
        </div>
    </>
  )
}

export default Registrar
