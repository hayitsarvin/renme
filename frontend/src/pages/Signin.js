import React,{useEffect, useState} from 'react'
import "../styles/pages/auth.css"
import { Link,  useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const Signin = ({setUserInfo}) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  let navigate = useNavigate();
  const [error, setError] = useState("");

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      const loginHandler = (e) => {
        e.preventDefault()
        axios
    .post('https://rentnow-0oxy.onrender.com/api/auth/login', {
      ...inputs
    })
    .then((res) => {
      
      
      if(res.data.code == 1){
        localStorage.setItem("token" , res.data.token)
        console.log("fsfasfadsf" , res.data);
        setUserInfo(old => old.isLoggedIn = true)
        console.log("chat api:" ,inputs.email);
        axios.put(
          "https://api.chatengine.io/users/",
          { username: inputs.email, secret: inputs.email, first_name: inputs.email },
          { headers: { "Private-Key": "dfda766d-aa8c-4c16-9ef0-94feb3f05d10" } }
        ) 
        .then((res) => {
          console.log("chat engine res" , res);
        })
        
      }else if(res.data.code == 0){
        setError(res.data.message)
      }
      
      
    })
    .catch((err) => {
      
    });
    
      }
      useEffect(() => {
        axios
        .post('https://rentnow-0oxy.onrender.com/api/auth/getUsername', {
          
        },
        {
        headers:{
          'x-access-token': localStorage.getItem("token")
        }
      })
        .then((res) => {
          
          
          // localStorage.setItem("token" , res.data.token)
          if(res.data.isLoggedIn){
            
            navigate("/useradmin/items")
          }else{
            console.log("false",localStorage.getItem("token"));
    
            
            
           
            
          }
           
          
        })
        .catch((err) => {
          console.log(err);
        });
        
        scrollToTop()  
      } , [])
  return (
    <div className='signin-page'>
        <div className='yellow-background-circle'></div>
        <div className='container'>
        <div className='signin-div'>
            <div className='signin-content-div'>
            
            <h1 className='title'>login into my account</h1>
            <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
<p className='or-text'>or</p>
<p className='error'>{error ? error : ""}</p>
        <form className='signin-form' onSubmit={(e) => loginHandler(e)}>
      <label>
        <h2 className='input-name'>Email</h2>
      <input 
        type="email" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
        placeholder='Enter your Email '
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
        
        <input type="submit" className='btn yellow' value="login"/>
        <Link to="/signup" className='signup-link-div'>
            <p className='signup-link'>dont have an account ? <span>signup</span></p>
        </Link>
    </form>
    </div>
        </div>
        </div>
    </div>
  )
}

export default Signin