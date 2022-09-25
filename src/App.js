import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck, faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons"

import './App.css';

function App() {
  
  // Task State
  const [toDo,setTodo] = useState([
    {"id": 1, "title" : " Task", "status": false},
    {"id": 2, "title" : " Task", "status": false}
  ])

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('')
  
  // Add Task
  const addTask = (e) => {
    e.preventDefault()
    if(newTask){
      let num = toDo.length + 1
      let newEntry = {id : num , title : newTask, status: false}
      setTodo([...toDo, newEntry])
      setNewTask('')
    }
  }

  // Delete Task
  const deleteTask = (id) => {
    //
  }

  // Mark Task
  const markDone = () => {
    //
  }

  // Cancel Update
  const cancelUpdate = () => {
    //
  }

  // Change Task For Update
  const changeTask = () => {
    //
  }
  
  //Update Task
  const updateTask = () => {
    //
  }

  return (
    <div className="container App">
    <br/>
    <h2>To Do List</h2>
    <br/>

    {/* Add task*/}

    <div className="row">
      <div className="col">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} className="form-control form-control-lg"/>
      </div>
      <div className="col-auto">
        <button className="btn btn-lg btn-success" onClick={addTask}>Add Task</button>
      </div>
    </div>
    <br/>

    {/* Update task*/}

    <div className="row">
      <div className="col">
        <input className="form-control form-control-lg" />
      </div>
    <div className="col-auto">
      <button className="btn btn-lg btn-success mr-20">Update Task</button>
      <button className="btn btn-lg btn-danger">Cancel</button>
    </div>
    </div>
    <br/>

    {toDo && toDo.length ? '' : "No task . . ." }

    {toDo && toDo
    .sort((a,b) => a.id > b.id ? 1 : -1)
    .map((task, index) => {
      return <React.Fragment key={task.id}>

      <div className="col taskBg">
        <div className={task.status ? 'done' : ''}>
          <span className="taskNumber">{index + 1}</span>
          <span className="taskText">{task.title}</span>
        </div>

        <div className="iconsWrap">

          <span title="Completed / Not Completed">
            <FontAwesomeIcon icon={faCircleCheck} onClick={markDone}/>
          </span>

          <span title="Edit">
            <FontAwesomeIcon icon={faPen} onClick={updateTask}/>
          </span>

          <span title="Delete">
            <FontAwesomeIcon icon={faTrashCan} onClick={deleteTask}/>
          </span>
        </div>

      </div>
      </React.Fragment>
    })}
    </div>
  );
}

export default App;
