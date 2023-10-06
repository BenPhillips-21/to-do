import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArchiveFill, BsFillCalendarEventFill, BsFillCalendar2RangeFill, BsFillExclamationCircleFill } from "react-icons/bs";

const SideBar = () => {
  return (<>
    <div className="sidebar-container">
        <div className="row">
            <nav className="col-md-3 col-lg-2 d-md-block sidebar">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/"><BsFillArchiveFill />  All Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/Today"><BsFillCalendarEventFill />  Today</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/next"><BsFillCalendar2RangeFill />  Next 7 Days</Link>
                        </li>
                    </ul>
            </nav>
        </div>
    </div>
    </>
  )
}

export default SideBar