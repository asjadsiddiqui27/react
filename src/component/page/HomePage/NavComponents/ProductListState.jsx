import React from 'react'
import { useState } from 'react'

function ProductListState() {

    let [product, setProduct] = useState( { name: "", catogery: "",price:"" } );
    
    let [element, setElement ] = useState({})
  
    const changtheObj = () => setProduct( element );
  

    
    const nameChange=(event)=>{
      setElement (  {...element, name :event.target.value } );
      }  
      const emailChange=(event)=>{
          setElement( {...element, price:event.target.value } );
      }
      const addChange=(event)=>{
        setElement( {...element, catogery :event.target.value } );
        //  console.log(event.target.value);
      }

  return (
    <div>
      <br/>
       Product Name :
      <input type="text" placeholder='ProductName' onChange={nameChange} />
      <br /><br />
       Product Catogery :
      <input type="text" placeholder='ProductCatogery' onChange={addChange} />
      <br /><br />
       Product Price :
      <input type="number" placeholder='ProductPrice' onChange={emailChange} />
      <br /><br />
      <button className="btn btn-success" onClick={changtheObj} type="submit">
        Submit
      </button>
      <br />
      <h3>Product Details</h3>
      <ul>
        <li><b>Name</b> : {product.name}</li>
        <li><b>Catogery</b> : {product.catogery}</li>
        <li><b>Price Rs.</b> : {product.price}</li>
      </ul>
      <hr/>
    </div>
  )
}

export default ProductListState