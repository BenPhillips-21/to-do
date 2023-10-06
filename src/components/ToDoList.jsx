import React from 'react'
import { Link } from 'react-router-dom';
import { format, parse, addDays, differenceInDays } from 'date-fns';

const ToDoList = ({ taskList, removeTask }) => {
  console.log(taskList)
  return (<>
    <div className="list-container">
    <ul>
    {taskList.map ((taskList, index) => (
        <li key={index}>
            <h3 >{taskList.title}</h3>
            <p>{taskList.description}</p>
            <p>{taskList.date.toLocaleDateString()}</p>
            <button onClick={() => removeTask(index)}>Remove</button>
        </li>
    ))}
    </ul>
    </div>
  </>  
  )
}

export default ToDoList

 {/* <Link to={`/item/${id}`}>{taskList.title}</Link> */}