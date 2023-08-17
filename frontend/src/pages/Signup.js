import React,{useEffect, useState} from 'react'
import "../styles/pages/auth.css"
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import VerificationInput from "react-verification-input";



const Signup = ({setUserInfo}) => {
  const navigate =  useNavigate()
  const [signupState , setSignupState] = useState(0)
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [code, setCode] = useState();
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
  const check = () => {
    setChecked(!checked)
  } 
  useEffect(() => {
    // axios
    // .post('http://localhost:8082/api/auth/register', {
    //   name:"arvin",
    //   email:"holyps4@gmail.com",
    //   phone:"09187173746",
    //   password: "14486Arvin",
    // })
    // .then((res) => {
      
    //   console.log(res);

      
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    console.log("i",inputs);
   
  }, [inputs])
  const signupHandler = (e) => {
    setErrorCode("")
    e.preventDefault()
    if(signupState == 0) {
      if(checked == true){
        if(inputs.password == inputs.confirmPassword){
        setSignupState(1)

        }else{
          setError("your password do not match!")
        }
      }
    }else if(signupState == 1){
      var min = 10000;
      var max = 99999;
     var temp=Math.floor(Math.random() * (max - min + 1)) + min;
      setCode(temp)
      
      axios
    .post('http://localhost:8082/api/auth/sms', {
      message:"your confirmation code is " + temp ,
      phone: inputs.phone
    })
      setSignupState(2)
    }else if(signupState == 2){
      
      if(code == verifyCode){
        
        
        axios
        .post('https://rentnow-0oxy.onrender.com/api/auth/register', {
          ...inputs
        })
        .then((res) => {
          
          if(res.data.code == 0){
            setError("email or phone is already been used!")
            setSignupState(0)
          }else if(res.data.code == 1){
            axios
        .post('https://rentnow-0oxy.onrender.com/api/auth/login', {
          ...inputs
        })
        .then((res) => {
          
          
          if(res.data.code == 1){
            localStorage.setItem("token" , res.data.token)
            setUserInfo(old => old.isLoggedIn = true)
            navigate("/useradmin/profile")
    
          }else if(res.data.code == 0){
            setError(res.data.message)
          }
          
          
        })
        .catch((err) => {
          
        });
        
          }
    
          
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        setErrorCode("verify code is not correct!")
      }
      
    }
  }

  return (
    <>
   {
     signupState == 0 ? (<div className='signup-page'>
     <div className='yellow-background-circle'></div>
     <div className='container'>
     <div className='signup-div'>
         <div className='signup-content-div'>
         
         <h1 className='title'>create an account</h1>
         <GoogleLogin
onSuccess={credentialResponse => {
 console.log(credentialResponse);
}}
onError={() => {
 console.log('Login Failed');
}}
size='large'
useOneTap
/>
<p className='or-text'>or</p>
    <p className='error'>{error ? error : ""}</p>
     <form className='signup-form' onSubmit={(e) => signupHandler(e)}>
   <label>
     <h2 className='input-name'>Email</h2>
   <input 
     type="email" 
     name="email" 
     value={inputs.email || ""} 
     onChange={handleChange}
     placeholder='Enter your Email'
     className='input'
   />
   </label>
   <label>
   <h2 className='input-name'>
     password
     </h2>
     <input 
       type="password" 
       name="password" 
       value={inputs.password || ""} 
       onChange={handleChange}
       placeholder='Enter your password'
       className='input'
     />
     </label>
     <label>
   <h2 className='input-name'>
     confirm password
     </h2>
     <input 
       type="password" 
       name="confirmPassword" 
       value={inputs.confirmPassword || ""} 
       onChange={handleChange}
       placeholder='confirm your password'
       className='input'
     />
     </label>
     <div className='agree-term-div'>
       <div className='checkbox' onClick={check}>
         <div className={'inner-checkbox ' + (checked ? "checked" : "")}></div>
       </div>
       <Link className='agree-term'>agree to terms and services</Link>
     </div>
     
     <input type="submit" className='btn yellow' value="sign up" />
     <Link to="/signin" className='signin-link-div'>
         <p className='signin-link'>already have an account ? <span>signin</span></p>
     </Link>
 </form>
 </div>
     </div>
     </div>
 </div>) : (signupState == 1 ? (
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
        name="phone" 
        value={inputs.phone || ""} 
        onChange={handleChange}
        placeholder='Enter your Phone Number'
        className='input'
      />
     
      
      
      </label>        
        <input type="submit" className='btn yellow' value="send code" onClick={(e) => signupHandler(e)}/>
    </form>
    </div>
        </div>
        </div>
    </div>
     ) : 
     <div className='signup-page'>
    <div className='yellow-background-circle'></div>
    <div className='container'>
    <div className='signup-div'>
        <div className='signup-content-div'>
        <h1 className='title'>enter the code</h1>
        <p className='error'>{errorCode ? errorCode : ""}</p>

    <form className='signup-form'>
        <div className='veri-code-div'>
    <VerificationInput classNames={{
    container: "code-input-container",
    character: "code-input-character",
    characterInactive: "code-input-character--inactive",
    characterSelected: "code-input-character--selected",
  }}
  
 validChars="0-9" inputProps={{ inputMode: "numeric" }} length={5} placeholder="-"  onChange={(value) => setVerifyCode(value)} />
   </div>
    
    <input type="submit" className='btn yellow' value="verify" onClick={(e) => signupHandler(e)}/>
  
</form>
</div>
    </div>
    </div>
</div>)
   }
    
    </>
  )
}

export default Signup