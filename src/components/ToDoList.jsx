import React from 'react'
import { Link } from 'react-router-dom';

const ToDoList = ({ list, removeItem }) => {
  return (<>
    <div className="list-container">
    <ul>
    {list.map ((list, index) => (
        <li key={index}>
            <Link to={`/item/${index}`}>{list.content}</Link>
            <button id={index} onClick={() => removeItem(index)}>BOOP</button>
        </li>
    ))}
    </ul>
    </div>
  </>  
  )
}

export default ToDoList