import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function StoreProd() {
  let [prodDetails, setDetails] = useState([{}]);
  let [Btn, setBtn] = useState(true);
  let [search, setSearchItem] = useState("");

  const show = () => {
    setBtn(!Btn);
    console.log(Btn);
  };

  useEffect( () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
      });
  }, []);
  
  const searchFunc = (event) => {
    setSearchItem(event.target.value); 
  };

  const searchProduct = prodDetails.filter((el) =>
  el.title && el.title.includes(search) );

  return (
    <div>
      <br />
      <button onClick={show}>Click</button>
      <br /><br />
<input placeholder="Search" onChange={searchFunc}></input>
<br /><br />
{

Btn ? (

      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Price</th>&nbsp;
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
           
         
          {searchProduct.map( (el) => {
              return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>${el.price}</td>&nbsp;
                <td>{el.category}</td>
              </tr>
            );
          }) }
        </tbody>
      </table>
       )
       : null
    }

<br />
{/* <ul>

{searchProduct.map( (el)=>{
    return <li key={el.id}>{el.title}</li>
})}

</ul> */}
    </div>
  );
}

export default StoreProd;
