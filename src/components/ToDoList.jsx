import React from 'react'
import { Link } from 'react-router-dom';

const ToDoList = ({ taskList, removeTask }) => {
  console.log(taskList)
  return (<>
    <div className="list-container">
    <ul>
    {taskList.map ((taskList) => (
        <li key={taskList.id}>
            <h3 >{taskList.title}</h3>
            <p>{taskList.description}</p>
            <button onClick={() => removeTask(taskList.id)}>Remove</button>
        </li>
    ))}
    </ul>
    </div>
  </>  
  )
}

export default ToDoList

 {/* <Link to={`/item/${id}`}>{taskList.title}</Link> */}