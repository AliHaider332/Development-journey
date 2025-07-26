import { useDispatch } from "react-redux";
import { CounterReducers } from "./Store";
function FunctionalButtons(){
    const dispather=useDispatch()
    return(
        <div className="mt-3">
        
        <button className="btn btn-success me-2" onClick={()=>{dispather(CounterReducers.INCREMENT())}}>+1</button>
        <button className="btn btn-danger" onClick={()=>{dispather(CounterReducers.DECREMENT())}}>-1</button>
        
      </div>
    )
}
export default FunctionalButtons;