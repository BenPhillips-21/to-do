import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( <>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">To Do List</Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="navvy" aria-current="page" to="/Add">Add Item To List</Link>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default NavBar