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
                            <a className="nav-link active" href="#">
                                A - All Tasks
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                T - Today
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                N - Next 7 Days
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                I - Important
                            </a>
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