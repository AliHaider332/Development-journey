import { useContext } from "react";
import { AllPost } from "../Store/AllPostContext";

function Welcome() {
  const {changeMode}=useContext(AllPost);
  return (
    <div className="container mt-5 text-center">
      <div className="card shadow p-4">
        <h1 className="display-4 text-primary">Welcome!</h1>
        <p className="lead">We're glad to have you here.</p>
        <button className="btn btn-success mt-3" onClick={()=>{changeMode(false)}}>Get Started</button>
      </div>
    </div>
  );
}
export default Welcome;
