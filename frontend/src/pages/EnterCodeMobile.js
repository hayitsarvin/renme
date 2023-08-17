import React from 'react'
import VerificationInput from "react-verification-input";
import "../styles/pages/auth.css"
const EnterCodeMobile = () => {
  return (
    <div className='signup-page'>
    <div className='yellow-background-circle'></div>
    <div className='container'>
    <div className='signup-div'>
        <div className='signup-content-div'>
        
        <h1 className='title'>enter the code</h1>
    <form className='signup-form'>
        <div className='veri-code-div'>
    <VerificationInput classNames={{
    container: "code-input-container",
    character: "code-input-character",
    characterInactive: "code-input-character--inactive",
    characterSelected: "code-input-character--selected",
  }}
  
 validChars="0-9" inputProps={{ inputMode: "numeric" }} length={5} placeholder="-"  />
   </div>
    
    <input type="submit" className='btn yellow' value="verify"/>
  
</form>
</div>
    </div>
    </div>
</div>
  )
}

export default EnterCodeMobile