import React from 'react'
import NavBar from './NavBar/NavBar'
import Item from './Item/Item'
import {Link} from 'react-router-dom'

function AdminView({user}) {
  return (
    <>
      <div className="row">
        <NavBar user={user}/>
        <Link className="link align" to="/registrar">
          <h1 className="align botonS col-12 col-lg-3">Agregar tribu</h1>
        </Link>
        <Item />
      </div>
    </>
  )
}

export default AdminView