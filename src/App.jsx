import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import NavBar from "/home/ben/projects/js/to-do/src/components/NavBar.jsx"
import TodoList from "/home/ben/projects/js/to-do/src/components/ToDoList.jsx"
import AddTodo from "/home/ben/projects/js/to-do/src/components/AddToDo.jsx"
import ShowItem from "/home/ben/projects/js/to-do/src/components/ShowItem.jsx"

const seedList = [
  { content: "Feed the dog"},
  { content: "Do Homework"},
  { content: "Learn Portugese"}
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

function ShowItemWrapper() {
  const { id } = useParams()
  return <ShowItem list={list[id]} />
}

  return ( <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList list={list}/>} />
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

