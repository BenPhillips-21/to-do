import React from 'react'
import { Link } from 'react-router-dom';

const ToDoList = ({ list }) => {
  return (<>
    <div className="list-container">
    <ul>
    {list.map ((list, index) => (
        <li key={index}>
            <Link to={`/item/${index}`}>{list.content}</Link>
        </li>
    ))}
    </ul>
    </div>
  </>  
  )
}

export default ToDoList