
import React, { useContext } from "react";
import UserContext from "./UserContext";

function Dcomponent() {

  const {user,userData,setUser }= useContext(UserContext);
  
  console.log(user);

  return (
  
  <div>
      <div>My Name is {user.name} and {user.rollNo} from {user.course}</div>

      <h2>{userData}</h2>
      
      <button onClick={()=>{setUser("Data Fetch")}}>Click To Change</button>
  </div>

);

}

export default Dcomponent;
