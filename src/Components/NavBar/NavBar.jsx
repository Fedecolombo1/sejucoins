import "./NavBar.css";
import './navMenu.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import firebaseApp from '../../firebase/credenciales'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(firebaseApp);

const NavBar = ({user}) => {
  return (
    <>
    {user.rol === "admin" ? 
      <header className="navbar">
        <Link className="col-1" to="/">
          <h1 className="col-12 nombre">Seju</h1>
        </Link>
        <div className="col-xl-7 col-lg-9 row align">
            <h2 className="col-2 align links">
              <NavLink to="/" className="navLinks">
                  Tribus
              </NavLink>
            </h2>
        </div>
        <button onClick={()=> signOut(auth)}>Cerrar sesion</button>
      </header>
      :
    <div>
      <header className="navbar">
        <Link className="col-1" to="/">
          <h1 className="col-12 nombre">Seju</h1>
        </Link>
        <button onClick={()=> signOut(auth)}>Cerrar sesion</button>
      </header>
    </div>
    }
      
    </>
  );
};

export default NavBar;
