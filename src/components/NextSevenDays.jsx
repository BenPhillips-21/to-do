import React from 'react'

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
    <div className="list-container">
      <ul>
        {filteredTasks.map ((filteredTasks, index) => (
          <li key={index}>
          <h3 >{filteredTasks.title}</h3>
          <p>{filteredTasks.description}</p>
          <p>{filteredTasks.date.toLocaleDateString()}</p>
          <button onClick={() => removeTask(index)}>Remove</button>
      </li>
        ))}
      </ul>
      </div>
    </>
    )
}

export default NextSevenDays