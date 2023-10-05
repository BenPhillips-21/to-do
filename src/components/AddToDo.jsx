import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddToDo = ({ add, task, setTask }) => {
  const nav = useNavigate();

  const [taskState, setTaskState] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTaskState({
      ...taskState,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    add(taskState);
    setTaskState({ title: '', description: '' });
    nav('/');
  };

  return (
    <>
      <form className="add-container" onSubmit={submit}>
        <div>
          <h6>Title:</h6>
          <textarea
            type="text"
            name="title"
            value={taskState.title}
            onChange={handleInputChange}
            rows="1"
          />
          <h6>Description:</h6>
          <textarea
            type="text"
            name="description"
            value={taskState.description}
            onChange={handleInputChange}
            rows="1"
          />
        </div>
        <button className="btn btn-success mt-3">Add To List</button>
      </form>
    </>
  );
};

export default AddToDo;
