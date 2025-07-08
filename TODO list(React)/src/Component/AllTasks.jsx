import styles from './AllTasks.module.css'
function AllTasks({tasks,deleteTask}){
  return (
    <>
    {tasks.map((task) => (
      <div className="row mb-2" key={task.key}>
        <div className="col-6">
          {task.description}
        </div>
        <div className="col-4">
          {task.date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>{deleteTask(task.key)}}>DELETE</button>
        </div>
      </div>
    ))}
  </>
  )
    
}
export default AllTasks;