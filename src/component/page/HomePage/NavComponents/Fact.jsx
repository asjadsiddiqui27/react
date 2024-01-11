import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'


 function Fact(){
    
    const [fact , setFact] = useState(null); //Update an when we get data from api

    useEffect(()=>{
        fetchApi();
    },[] );    //useEffect use to fetch api's

    const fetchApi= async()=>{
        // try {
            const data = await fetch("https://catfact.ninja/fact");
            const json = await data.json();
            console.log(json.fact);
            // console.log(json);
            setFact(json.fact);

        // } catch (error) {
        //     const fact = error;
        // }
    }

  return (
    <div>
<h1>Fact</h1>
<p>{fact}</p>


    </div>
  )
}

export default Fact