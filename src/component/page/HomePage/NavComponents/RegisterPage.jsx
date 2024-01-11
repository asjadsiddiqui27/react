import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Register() {
    function submit(){
        console.log("Clicked");
    }

  return (
    <div className="menu">
    
      first name :  <input type="text"></input>
      <br /><br />
      last name : <input type="text"></input>
      <br /><br />
      <button type='submit' onClick={submit}><Link to="dashboard">
        Register
        </Link>
      </button>
      <Outlet/>
      <br/>
    </div>
  );
}
