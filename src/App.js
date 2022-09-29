import {useState} from "react"

//------ Components
import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import ToDo from './components/ToDo.jsx'

//------ Stylization
import 'bootstrap/dist/css/bootstrap.min.css'
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
      {
      id : num , 
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
    <h1>To Do List Project</h1>
    <br/>

    {/* Update task*/}
    {updateData && updateData ? (
    <UpdateForm
      updateData={updateData}
      updateTask={updateTask}
      cancelUpdate={cancelUpdate}
      changeTask={changeTask}
    />
    ) : (
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {toDo && toDo.length ? '' : <h2>Currently there's no tasks</h2> }
    
    <ToDo
    toDo={toDo}
    markDone={markDone}
    deleteTask={deleteTask}
    setUpdateData={setUpdateData}
    />



    </div>
  );
}

export default App;
