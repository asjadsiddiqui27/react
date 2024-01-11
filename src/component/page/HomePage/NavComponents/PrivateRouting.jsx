import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRouting(props) {

    const {Component} = props;

    const Navigate = useNavigate();
    // let loggedIn =true;
    let loggedIn = sessionStorage.getItem("login")

useEffect( ()=>{
    if(!loggedIn){
        Navigate("/login");    
    }
})
    
  return (
    <div>
        <Component/>
    </div>
  )
}

export default PrivateRouting