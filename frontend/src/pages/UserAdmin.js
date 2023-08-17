import React, { useEffect, useState } from 'react'
import UserAdminMenu from '../components/UserAdminMenu'
import "../styles/pages/useradmin.css"
import MyRentals from '../components/MyRentals'
import MyItems from '../components/MyItems'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import MyProfile from '../components/MyProfile'
import Requests from '../components/Requests'
import MyChats from '../components/MyChats'
const UserAdmin = ({userInfo , setUserInfo}) => {
  let navigate = useNavigate();
  let { tab } = useParams();
  console.log("hiiiii" ,tab);
  const pickTab = () => {
    if(tab == "rental"){
      return <MyRentals userInfo={userInfo} setUserInfo={setUserInfo}/>
    }else if(tab == "items"){
      return <MyItems userInfo={userInfo} setUserInfo={setUserInfo}/>
    }else if(tab == "profile"){
      return <MyProfile userInfo={userInfo} setUserInfo={setUserInfo}/>
    }else if(tab == "requests"){
      return <Requests userInfo={userInfo} setUserInfo={setUserInfo}/>
    }else if(tab == "chats"){
      return <MyChats userInfo={userInfo} setUserInfo={setUserInfo}/>
    }
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
      navigate("/signin")


      
      
     
      
    }
     
    
  })
  .catch((err) => {
    console.log(err);
  });
 },[])
  return (
    <div className='user-admin-page'>
        <div className='container'>
          {

          }
            <UserAdminMenu userInfo={userInfo} setUserInfo={setUserInfo}/>
            {/* <MyRentals /> */}
            {
              pickTab()
            }
            
        </div>
    </div>
  )
}

export default UserAdmin