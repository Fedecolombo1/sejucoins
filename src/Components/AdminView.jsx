import React from 'react'
import NavBar from './NavBar/NavBar'
import Item from './Item/Item'

function AdminView({user}) {
  return (
    <div>
      <div className="row align col-12">
        <NavBar user={user}/>
        <Item />
      </div>
    </div>
  )
}

export default AdminView