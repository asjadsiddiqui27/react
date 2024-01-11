import React from "react";
import { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () =>{
    return(
        count!=0 ? setCount(count -1 ) : null
        )}

        
  const [name, setName] = useState();
  const show =()=> setName("My Name is Asjad");
  const hide = () => setName();

  return (
    <div>
      
      <h2>{name}</h2>
      <br />
      <button onClick={show}>Show</button>
      &nbsp;
      <button onClick={hide}>Hide</button>
      <hr />
      <hr />
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      &nbsp;
      <button onClick={reset}>Reset</button>
      &nbsp;
      <button onClick={decrement}>decrement</button>

    </div>
  );
}

export default Hooks;
