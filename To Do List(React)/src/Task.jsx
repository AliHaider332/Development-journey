import css from "./Task.module.css"
function Task({TotalTask}){
    
    return(
        <>
            {
                TotalTask.map((item)=>{
                    let discription=item.task;
                    let date=item.date;
                    return(
                        <div className={css.element}>
                        <div class="row">
                        <div class="col-sm-6">{discription}</div>
                        <div class="col-sm-4">{date}</div>
                        <div class="col-sm-2"><button type="button" class="btn btn-danger">DELETE</button></div>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
}
export default Task;