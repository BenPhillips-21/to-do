import React from 'react'
import { Link } from 'react-router-dom';
import { format, parse, addDays, differenceInDays } from 'date-fns';
import { BsTrash, BsFillPlusCircleFill } from "react-icons/bs";

const buttonStyle = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
};

const ToDoList = ({ taskList, removeTask }) => {
  console.log(taskList)
  return (<>
    <h1>All Tasks</h1>
    <div className="list-container">
    <ul>
    {taskList.map ((taskList, index) => (
        <li key={index}>
            <div className='task-container'>
              <div className='titledesc-container'>
            <h5 >{taskList.title}</h5>
            <p>{taskList.description}</p>
            </div>
            <p>{taskList.date.toLocaleDateString()}</p>
            <button onClick={() => removeTask(index)} style={buttonStyle} ><BsTrash /></button>
            </div>
        </li>
    ))}
    </ul>
    <Link className="navvy" aria-current="page" to="/Add"><BsFillPlusCircleFill  /></Link>
    </div>
  </>  
  )
}

export default ToDoList
