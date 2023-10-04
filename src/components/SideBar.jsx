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
                                All Tasks
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Today
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Next 7 Days
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Important
                            </a>
                        </li>
                    </ul>
                {/* </div> */}
            </nav>
        </div>
    </div>
    </>
  )
}

export default SideBar