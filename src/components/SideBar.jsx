import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (<>
    <div className="sidebar-container">
        <div className="row">
            <nav className="col-md-3 col-lg-2 d-md-block sidebar">
                {/* <div className="position-sticky"> */}
                <h3>Home</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/">All Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/Today">Today</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/next">Next 7 Days</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/important">Important</Link>
                        </li>
                    </ul>
                    <h3>Projects</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                + - Add Project
                            </a>
                        </li>
                        </ul>
            </nav>
        </div>
    </div>
    </>
  )
}

export default SideBar