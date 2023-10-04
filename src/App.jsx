import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import SideBar from "./components/SideBar.jsx"
import TodoList from "./components/ToDoList.jsx"
import AddTodo from "./components/AddToDo.jsx"
import ShowItem from "./components/ShowItem.jsx"
import './App.css'

const seedList = [
  { content: "Feed the dog"},
  { content: "Do Homework"},
  { content: "Learn Portugese"},
  { content: "Poo"}
]

const App = () => {
  let nav = useNavigate()
  const [list, setList] = useState(seedList)

function add(content) {
  const id = list.length
  const newItem = { content }
  setList([...list, newItem])
  nav(`/item/${id}`)
}

const removeItem = (indexToRemove) => {
  const updatedList = list.filter((item, index) => index !== indexToRemove);
  setList(updatedList);
};

function ShowItemWrapper() {
  const { id } = useParams()
  return <ShowItem list={list[id]} />
}

  return ( <>
  <SideBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList list={list} removeItem={removeItem}/>} />
        <Route path="/add" element={<AddTodo add={add} />} />
        <Route path="/item">
          <Route path=":id" element={<ShowItemWrapper/> } />
        </Route>
        <Route path='*' element={<h3>Error 404 - Page not found</h3>}/>
      </Routes>
      
      </>
  );
};

export default App;

