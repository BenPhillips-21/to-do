import React from 'react'
import { BsFillCheckCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Today = ({ taskList, removeTask }) => {

  const todayDate = new Date();
  let targetDay = todayDate.getDate()
  let targetMonth = todayDate.getMonth()
  let targetYear = todayDate.getFullYear()

  const filteredTasks = taskList.filter((task) => {
    const taskDate = task.date

    const taskDay = taskDate.getDate()
    const taskMonth = taskDate.getMonth()
    const taskYear = taskDate.getFullYear()

    const isToday = taskDay === targetDay && taskMonth === targetMonth && taskYear === targetYear
    return isToday
  });

  console.log(filteredTasks);
  console.log("bello");



return (
  <>
  <h1>Today</h1>
  <div className="list-container">
    <ul>
      {filteredTasks.map ((filteredTasks, index) => (
        <li key={index}>
          <div className="task-container">
        <h3 >{filteredTasks.title}</h3>
        <p>{filteredTasks.description}</p>
        <p>{filteredTasks.date.toLocaleDateString()}</p>
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
  )
}

export default Today