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
  const addTask = () => {
    //
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
    <h2>To Do List</h2>

    {toDo && toDo.length ? '' : "No task . . ." }

    {toDo && toDo.map((task, index) => {
      return <React.Fragment key={task.id}>

      <div className="col taskBg">

        <div className={task.status ? 'done' : ''}>
          <span className="taskNumber">{index + 1}</span>
          <span className="taskText">{task.title}</span>
        </div>
        <div className="iconsWrap">
          <span>
            <FontAwesomeIcon icon={faCircleCheck} onClick={markDone}/>
          </span>
          <span>
            <FontAwesomeIcon icon={faPen} onClick={updateTask}/>
          </span>
          <span>
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
