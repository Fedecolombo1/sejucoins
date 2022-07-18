import "./NavBar.css";
import './navMenu.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import firebaseApp from '../../firebase/credenciales'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(firebaseApp);

const image = require("../../images/logo.jpg").default;

const NavBar = ({user}) => {
  return (
    <>
    {user.rol === "admin" ? 
    <>
      <header className="navbar align">
        <Link className="col-lg-4 col-12 link" to="/">
        <h1 className="col-12 align nombre">SeJu Turdera Oficial <img src={image} className="logo"/></h1>
        </Link>
        <button className="botonC" onClick={()=> signOut(auth)}>Cerrar sesion</button>
      </header>
    </>
      :
    <>
      <header className="navbar align">
        <Link className="col-lg-4 col-12 link" to="/">
          <h1 className="col-12 row align nombre">SeJu Turdera Oficial <img src={image} className="logo"/></h1>
        </Link>
        <button className="botonC" onClick={()=> signOut(auth)}>Cerrar sesion</button>
      </header>
    </>
    }
      
    </>
  );
};

export default NavBar;
