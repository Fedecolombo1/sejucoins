import React from 'react'

import AdminView from "../Components/AdminView"
import UserView from "../Components/UserView"

function Home({ user }) {
  return (
    <div>
      {user.rol === "admin" ? <AdminView user={user} /> : <UserView user={user} />}
    </div>
  )
}

export default Home