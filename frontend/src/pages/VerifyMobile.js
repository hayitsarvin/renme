import React,{useState} from 'react'
import "../styles/pages/auth.css"
import { Link } from 'react-router-dom';

const VerifyMobile = () => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
  return (
    
    <div className='signin-page'>
        <div className='yellow-background-circle'></div>
        <div className='container'>
        <div className='signin-div'>
            <div className='signin-content-div'>
            
            <h1 className='title'>Verify mobile number</h1>
        <form className='signin-form'>
      <label>
        <h2 className='input-name'>Phone Number</h2>
      <input 
        type="phone" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        placeholder='Enter your Phone Number'
        className='input'
      />
      </label>        
        <input type="submit" className='btn yellow' value="send code"/>
    </form>
    </div>
        </div>
        </div>
    </div>
  )
}

export default VerifyMobile