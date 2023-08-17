import React, { useEffect, useState } from "react";
import Home from "./pages/Home.js";
import "./styles/basic.css";

import Header from "./components/Header.js";
import Footer from "./components/sections/Footer.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";
import VerifyMobile from "./pages/VerifyMobile.js";
import ForgetPassword from "./pages/ForgetPassword.js";
import EnterCodeMobile from "./pages/EnterCodeMobile.js";
import ProductPage from "./pages/ProductPage.js";
import MarketPlace from "./pages/MarketPlace.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserAdmin from "./pages/UserAdmin.js";
import CreateProduct from "./pages/CreateProduct.js";
import axios from "axios";
function App() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const [userInfo , setUserInfo] = useState({})
  let navigate = useNavigate();

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
}

    window.addEventListener('resize', handleResize)
  },[])
  useEffect(() => {
    
    axios
    .post('https://rentnow-0oxy.onrender.com/api/auth/getUsername', {
      
    },
    {
    headers:{
      'x-access-token': localStorage.getItem("token")
    }
  },[])
    .then((res) => {
      setUserInfo(res.data)
      console.log(res);
      // localStorage.setItem("token" , res.data.token)
      if(res.data.isLoggedIn){
        console.log("true");
        // navigate("/useradmin/" + tab + "")
      }else{
        console.log("false",localStorage.getItem("token"));

        // navigate("/")
        
       
        
      }
       
      
    })
    .catch((err) => {
      console.log(err);
    });
    scrollToTop()
      
  } , [userInfo.isLoggedIn])

  return (
    
    <div className="App">
      <Header userInfo={userInfo}/>
      {/* <Home dimensions={dimensions}/> */}
      
      <Routes>
        <Route path="/" element={<Home dimensions={dimensions}/>}></Route>
        <Route path="/signin" element={<Signin setUserInfo={setUserInfo}/>}></Route>
        <Route path="/signup" element={<Signup setUserInfo={setUserInfo}/> }></Route>
        <Route path="/marketplace" element={<MarketPlace dimensions={dimensions}/>}>
          <Route path=":categoryParam" element={<MarketPlace dimensions={dimensions}/>}></Route>
        </Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/productpage/:id" element={<ProductPage />}></Route>
        <Route path="/createproduct" element={<CreateProduct />}></Route>
        <Route path="/useradmin/:tab" element={<UserAdmin  userInfo={userInfo} setUserInfo={setUserInfo}/>}></Route>
      </Routes>
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <ProductPage /> */}
      {/* <MarketPlace /> */}
      {/* <VerifyMobile /> */}
      {/* <ForgetPassword /> */}
      {/* <EnterCodeMobile /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
 