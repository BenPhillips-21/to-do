import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, parse } from 'date-fns';

const AddToDo = ({ add, task }) => {
  const nav = useNavigate();

  const [taskState, setTaskState] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTaskState({
      ...taskState,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;

    let chungus = new Date(inputDate)

    setTaskState({
      ...taskState,
      date: chungus,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    add(taskState);
    setTaskState({ title: '', description: '', date: '' }); 
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
            required={true}
          />
          <h6>Description:</h6>
          <textarea
            type="text"
            name="description"
            value={taskState.description}
            onChange={handleInputChange}
            rows="1"
          />
          <h6>Due Date:</h6>
          <input
            type="date"
            name="date"
            value={taskState.date}
            onChange={handleDateChange}
          />
        </div>
        <button className="btn btn-success mt-3">Add To List</button>
      </form>
    </>
  );
};

export default AddToDo;
