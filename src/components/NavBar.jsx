import React from 'react'
import { Link } from 'react-router-dom'
// import check.png from 'src/components/check.png'

const NavBar = () => {
  return ( <>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
  <img src="https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/check-circle-512.png" alt="checkmark image"></img>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default NavBar