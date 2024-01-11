import React from "react";
import { Link, Outlet } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";
// import Product from "./component/page/HomePage/Product/Product";

const Products = () => {

  const productsArray = [
    
    {
      name: "Belt",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp",
      price: "$ 10.99",
      category : "Access."
    },
    
    {
      name: "Shirt Combo",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp",
      price: "$ 25.99",
      category : "Mens Clothing"
    },
    
    {
      name: "Jeans Denim",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp",
      price: "$ 14.99",
      category : "Clothing"
    },
    
    {
      name: "Grey Sneaker",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp",
      price: "$ 50.99",
      category : "Footwear"
    },
    
    {
      name: "White Jeans",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp",
      price: "$ 61.99",
      category : "Clothing"
    },
   
    {
      name: "Hat",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp",
      price: "$ 50.99",
      category : "wearable"
    }

  ];
  

  // console.log(productsArray);
  const productComponents = productsArray.map( ( product ) =>{
    return (
      
      <Product
      name={product.name}
      img={product.img}
      category={product.category}
      price={product.price}
      />

      )   
   });




  return (

    <div className="container">

      <section style={{ backgroundColor: "#eee" }}>
        <div className="text-center py-5">
          <h4 className="mt-4 mb-5">
            <strong>Bestsellers</strong>
          </h4>
          <div className="row">

{productComponents}    
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
