import React from 'react'


const Today = ({ taskList, removeTask }) => {

  const todayDate = new Date();
  let target = todayDate.getDate()
  console.log(target)

  const filteredTasks = taskList.filter((task) => {
    const taskDate = task.date

    const taskDay = taskDate.getDate()

    return taskDay === target
  });

  console.log(filteredTasks);
  console.log("bello");



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

export default Today