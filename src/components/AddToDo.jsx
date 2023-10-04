import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const AddToDo = ({ add }) => {
  const nav = useNavigate()
  const [content, setContent] = useState('')

  function submit(e) {
    e.preventDefault()
    add(content)
  }

  return ( <>
    <form className="container" onSubmit={submit}>
        <div>
          <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" rows="8"></textarea>
        </div>
      <button className="btn btn-success mt-3">Add To List</button>
    </form>
    </>
  )
}

export default AddToDo