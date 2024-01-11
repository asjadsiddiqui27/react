import React from "react";
import { useState } from "react";

function FromState() {
  let [Product, setProduct] = useState([]);
  let [input , setInput ] = useState("")

  const addEle = () => {
    const newValue = [...Product];
    if(input!=""){
    newValue.push(input);}
    setProduct(newValue);
    setInput("");  
  };

  const dltEle = () => {
    const newValue = [...Product];
    newValue.pop();
    setProduct(newValue);
  };

  const updEle = () => {
    const newValue = [...Product];
    newValue.splice(0, 1, "opp");
    setProduct(newValue);
  };

  //new input value
  const inputUpdate = (event) => {
    setInput(event.target.value)
  }

  return (
    <div>
      Enter Here : 
      <input type="text" onChange={inputUpdate}/>
      <br /><br/>
      <button className="btn btn-success" onClick={addEle} type="submit">
        Add
      </button>
      &nbsp;
      <button className="btn btn-success" onClick={dltEle} type="submit">
        Delete
      </button>
      &nbsp;
      <button className="btn btn-success" onClick={updEle} type="submit">
        Update
      </button>
      <br /><br />
      <ul>
        {Product.map((el) => {
          return(
              <li>{el}</li>
        ) 
        })}
      </ul>
      <hr />
    </div>
  );
}

export default FromState;
