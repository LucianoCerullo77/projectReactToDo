import React from 'react'

function UpdateForm({updateData, updateTask, cancelUpdate, changeTask}) {
  return (
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
  )
}

export default UpdateForm