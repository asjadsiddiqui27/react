import React from 'react'
import Dcomponent from './Dcomponent'
import UserContext from './UserContext'
import { useContext } from 'react';

function Ccomponent(props) {
  const {user,userData,setUser }= useContext(UserContext);
  
  console.log(user);

  return (
    <div>
      <div>My Name is {user.name} and {user.rollNo} from {user.course}</div>

      <h2>{userData}</h2>
      
      <button onClick={()=>{setUser("Data Fetch")}}>Click To Change</button>
  </div>
  )
}

export default Ccomponent