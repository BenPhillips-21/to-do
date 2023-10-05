import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import SideBar from "./components/SideBar.jsx"
import TodoList from "./components/ToDoList.jsx"
import AddTodo from "./components/AddToDo.jsx"
import ShowItem from "./components/ShowItem.jsx"
import './App.css'


const App = () => {
  let nav = useNavigate()
//   const [list, setList] = useState(seedList)

const [task, setTask] = useState([
  {
  id: 1,
  title: 'Milk the cow',
  description: 'Tug HARD!'
},
{
  id: 2,
  title: 'Milk the goat',
  description: 'mmmm tuggy tuggy'
}
])

const add = (content) => {
  const newItem = (content)
  newItem.id = task.length + 1
  setTask([...task, newItem])
  // nav(`/item/${id}`)
  console.log(task)
}

const removeTask = (taskId) => {
  const updatedTasks = task.filter((task) => task.id !== taskId);
  setTask(updatedTasks);
};

// function ShowItemWrapper() {
//   const { id } = useParams()
//   return <ShowItem list={list[id]} />
// }

  return ( <>
  <SideBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList taskList={task} removeTask={removeTask}/>} />
        <Route path="/add" element={<AddTodo add={add} task={task} setTask={setTask} />} />
        
        <Route path="/item">
          {/* <Route path=":id" element={<ShowItemWrapper/> } /> */}
        </Route>
        <Route path='*' element={<h3>Error 404 - Page not found</h3>}/>
      </Routes>

      </>
  );
};

export default App;

