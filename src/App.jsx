import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import SideBar from "./components/SideBar.jsx"
import TodoList from "./components/ToDoList.jsx"
import Today from "./components/Today.jsx"
import AddTodo from "./components/AddToDo.jsx"
import ShowItem from "./components/ShowItem.jsx"
import './App.css'


const App = () => {
  let nav = useNavigate()

const [task, setTask] = useState(
  [
  {
  title: 'Milk the cow',
  description: 'Tug HARD!',
  date: new Date('2023-01-01'),
},
{
  title: 'Milk the goat',
  description: 'mmmm tuggy tuggy',
  date: new Date(),
}
]
)

const add = (content) => {
  const newItem = (content)
  setTask([...task, newItem])
  // nav(`/item/${id}`)
  console.log(task)
}

const removeTask = (taskIndex) => {
  const updatedTasks = task.filter((task, index) => index !== taskIndex);
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
        <Route path="/today" element={<Today taskList={task} removeTask={removeTask}/>} />
        <Route path="/add" element={<AddTodo add={add} task={task} />} />
        
        <Route path="/item">
          {/* <Route path=":id" element={<ShowItemWrapper/> } /> */}
        </Route>
        <Route path='*' element={<h3>Error 404 - Page not found</h3>}/>
      </Routes>

      </>
  );
};

export default App;

