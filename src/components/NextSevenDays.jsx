import React from 'react'
import { BsFillCheckCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';

const NextSevenDays = ({ taskList, removeTask }) => {
    const currentDate = new Date();

  const sevenDaysFromNow = new Date(currentDate);
  sevenDaysFromNow.setDate(currentDate.getDate() + 7);
  
  
  const filteredTasks = taskList.filter((task) => {
    const taskDate = task.date;

    const isWithinNextSevenDays =
      taskDate > currentDate && taskDate <= sevenDaysFromNow;

    return isWithinNextSevenDays;
  });

  return (
    <>
     <h1>Next Seven Days</h1>
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
    </>
    )
}

export default NextSevenDays