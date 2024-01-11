import React from 'react'

import Ccomponent from './Ccomponent.jsx'

function Bcomponent(props) {
  return (
    <div>
        
        <Ccomponent name={props.name}/>

    </div>
    
  )
}

export default Bcomponent