import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( <>
    <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">To Do List</Link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className="navvy" aria-current="page" to="/Add">Add Item To List</Link>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default NavBar