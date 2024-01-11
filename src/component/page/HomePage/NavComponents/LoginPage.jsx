import React from 'react'
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const Navigate = useNavigate();

    function submit(){
        sessionStorage.setItem("login",true);
    }

    
       useEffect(  ()=>{
    let loggedIn = sessionStorage.getItem("login")
        if(!loggedIn){
            Navigate("/login");
        }      
    })
       
   

  return (
    <div className="menu">
    
      Userame :  <input type="text"></input>
      <br /><br />
      Password :  <input type="password"></input>
      <br /><br />
      <button type='submit' onClick={submit}><Link>Login</Link></button> 

      {/* <Link to="register">Register</Link> */}
      <br/>
      <br/>
     
      {/* <Outlet/> */}
    
    </div>
  );
}
