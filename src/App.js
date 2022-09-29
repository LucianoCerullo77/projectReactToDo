import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck, faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons"

import './App.css';

function App() {
  
  // Task State
  const [toDo,setToDo] = useState([])

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('')
  
  // Add Task
  const addTask = (e) => {
    e.preventDefault()
    if(newTask){
      let num = toDo.length + 1
      let newEntry = 
      {id : num , 
      title : newTask, 
      status: false}
      setToDo([...toDo, newEntry])
      setNewTask('')
    }
  }

  // Delete Task
  const deleteTask = (id) => {
    let deleteCurrent = toDo.filter(task => task.id !== id)
    setToDo(deleteCurrent)
    //
  }

  //Update Task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('')
  }

  // Cancel Update
  const cancelUpdate = () => {
    setUpdateData("");
  }

  // Change Task For Update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    }
    setUpdateData(newEntry)
  }

  // Mark Task
  const markDone = (id) => {
    let marked = toDo.map(task => {
      if(task.id === id) {
        return ({...task, status: !task.status})
      }
      return task;
    })
    setToDo(marked)
    //
  }

  return (
    <div className="container App">
    <br/>
    <h1>To Do List</h1>
    <br/>

    {/* Update task*/}
    {updateData && updateData ? (
    <>
    <div className="row">
      <div className="col">
        <input 
        className="form-control form-control-lg" 
        value={ updateData && updateData.title}
        onChange={(e) => changeTask(e)}
        placeholder="Update current task" />
      </div>
    <div className="col-auto">  
      <button 
      className="btn btn-lg btn-success mr-20"
      onClick={updateTask}
      >Update Task</button>
      <button 
      className="btn btn-lg btn-danger"
      onClick={cancelUpdate}
      >Cancel</button>
    </div>
    </div>
    <br/>
    </>
    ) : (
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
    )}

    {toDo && toDo.length ? '' : <h2>Currently there's no tasks</h2> }

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

          <span title="Completed / Not Completed" onClick={(e) => markDone(task.id)}>
            <FontAwesomeIcon icon={faCircleCheck}/>
          </span>

          {task.status ? null : (
            <span title="Edit" onClick={()=> {setUpdateData(
              {id : task.id,
              title: task.title,
              status: task.status ? true : false}
              )}}>
            <FontAwesomeIcon icon={faPen}/>
          </span>
          )}

          <span title="Delete" onClick={() => deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </span>
        </div>

      </div>
      </React.Fragment>
    })}
    </div>
  );
}

export default App;
