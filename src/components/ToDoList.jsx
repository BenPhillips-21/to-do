import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';


const ToDoList = ({ taskList, removeTask }) => {
  console.log(taskList);
  return (
    <>
      <h1>All Tasks</h1>
      <div className="list-container">
        <ul>
          {taskList.map((taskList, index) => (
            <li key={index}>
              <div className="task-container">
                    <h5>{taskList.title}</h5>
                    <p>{taskList.description}</p>
                    <span>{taskList.date.toLocaleDateString()}</span>
                    <button onClick={() => removeTask(index)}>
                      <BsFillCheckCircleFill />
                    </button>
                  </div>
            </li>
          ))}
        </ul>
      </div>
      <Link id="addTaskButton" className="navvy" aria-current="page" to="/Add">
          <BsFillPlusCircleFill />
        </Link>
        <p id="addTaskText">Add Task</p>
    </>
  );
};

export default ToDoList;
