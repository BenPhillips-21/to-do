import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import SideBar from "./components/SideBar.jsx"
import TodoList from "./components/ToDoList.jsx"
import Today from "./components/Today.jsx"
import AddTodo from "./components/AddToDo.jsx"
import ShowItem from "./components/ShowItem.jsx"
import NextSevenDays from './components/NextSevenDays.jsx';
import './App.css'


const App = () => {
  let nav = useNavigate()

const [task, setTask] = useState(
  [
  {
  title: 'Milk the cow',
  description: 'Tug HARD! TUG TUG TUG TUG TUG TUG TUG TUG TUG TUG TUG TUG',
  date: new Date('2023-10-11'),
},
{
  title: 'Milk the goat',
  description: 'mmmm tuggy tuggy',
  date: new Date(),
},
{
  title: 'bello',
  description: 'bello bello bello bello ello bello bello bello',
  date: new Date('2023-10-10'),
}
]
)

const add = (content) => {
  const newItem = (content)
  setTask([...task, newItem])
  console.log(task)
}

const removeTask = (taskIndex) => {
  const updatedTasks = task.filter((task, index) => index !== taskIndex);
  setTask(updatedTasks);
};

  return ( <>
  <SideBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList taskList={task} removeTask={removeTask}/>} />
        <Route path="/today" element={<Today taskList={task} removeTask={removeTask}/>} />
        <Route path="/next" element={<NextSevenDays taskList={task} removeTask={removeTask}/>} />
        <Route path="/add" element={<AddTodo add={add} task={task} />} />
        <Route path='*' element={<h3>Error 404 - Page not found</h3>}/>
      </Routes>

      </>
  );
};

export default App;

