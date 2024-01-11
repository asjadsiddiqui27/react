import React from "react";

import { useState } from 'react';
import { useEffect } from 'react';  //To call an api  

import {  useParams } from "react-router-dom";
// import ERR from "./ERR";
import Products from "./Products";


function ProductsMulti() {
//allow to access the parameters of crrt route in functional component
//changes based on user input


const [product , setProduct] = useState(null); //Update an when we get data from api

const {id} = useParams();
    console.log(id)

useEffect(()=>{

    fetchApi();

},[] );
    //useEffect use to fetch api's
//takes 2 args. one callback and optional args here we empty arr bcz no need
// useEffect is to manage these side effects in a way that integrates with the React component lifecycle. It is commonly used to perform actions after the component has been rendered or to clean up resources before the component is unmounted.


const fetchApi= async()=>{
        const data = await fetch("https://fakestoreapi.com/products/"+id)
        console.log(data);  //promise response data
        const json1 = await data.json();  //convert promise data into json
        console.log(json1);
        setProduct(json1);
    }

if (product===null) return <Products/>
else
    // console.log(product);

return(

    <div className="container">


      <h4>Product No. {product.id}</h4>
      <br />
      <p><b>Category :</b> {product.category}</p>
      <br />
      <br />
      <img src={product.image} alt="" style={{width : "300px", height:"340px"}}/>
      <br />
      <br />
      <p> <i>{product.title}</i> </p>
      <br />
      <p><b>Description :</b> {product.description}</p>
      <p><b>Price :</b> ${product.price}</p>


    </div>
  );
}

export default ProductsMulti;
