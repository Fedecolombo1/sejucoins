import React from 'react'
import NavBar from './NavBar/NavBar'
import Item from './Item/Item'

function AdminView({user}) {
  return (
    <>
      <div className="row">
        <NavBar user={user}/>
        <Item />
      </div>
    </>
  )
}

export default AdminView