import React from 'react'

function AddTaskForm({newTask, setNewTask, addTask}) {
  return (
    <>
    {/* Add task*/}
    <div className="row">
      <div className="col">
        <input value={newTask}
        onChange={(e) => setNewTask(e.target.value)} 
        className="form-control form-control-lg" 
        placeholder="Add a new task"/>
      </div>
      <div className="col-auto">
        <button className="btn btn-lg btn-success" onClick={addTask}>Add Task</button>
      </div>
    </div>
    <br/>
    </>
  )
}

export default AddTaskForm