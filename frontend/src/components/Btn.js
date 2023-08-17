import React from 'react'
import { Link } from "react-router-dom";
function Btn({background , text , margin,to}) {
  return (
    <Link to={to} className={'btn ' + background + " " + margin}>
      <div className='btn-dark-layer'></div>
      {/* <div > */}
      <h4 className='btn-text'>{text}</h4>

      {/* </div> */}

      
      </Link>
    
    
  )
}

export default Btn