import React, { useEffect, useState } from 'react'
import Btn from './Btn'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Header = ({userInfo}) => {
    const [user , setUser]  = useState({})
    const [popupOpen , setPopupOpen]  = useState(false)
    const [hamberOpen , setHamberOpen]  = useState(false)
    const navigate = useNavigate()

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
            setUser(res.data.user)
            
          }else{
            
      
            setUser({})
            
            
           
            
          }
           
          
        })
        .catch((err) => {
          console.log(err);
        });
    } , [userInfo.isLoggedIn])
    const logoutHandler = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        window.location.reload(true)

    }
  return (
    <div className='navbar'>
        <div className={hamberOpen ? 'nav-hamber-menu-popup' : 'nav-hamber-menu-popup display-none'}>
            <div className='hamber-links' >
                <Link className='hamber-link' onClick={() => setHamberOpen(old => !old)} to="/">home</Link>
                <Link className='hamber-link' onClick={() => setHamberOpen(old => !old)} to="/#testimonial" reloadDocument={true}>testimonial</Link>
                <Link className='hamber-link' onClick={() => setHamberOpen(old => !old)} to="/#faq" reloadDocument={true}>faq</Link>
                <Link className='hamber-link' onClick={() => setHamberOpen(old => !old)} to="/marketplace">marketplace</Link>
            </div>
            
        </div>
        <div className='container'>
        <div className='navbar-left'>
            <div className='navbar-logo-div'>
            <Link to={"/"}>

                <h1 className='navbar-logo'>Rent<span>Now</span></h1>
            </Link>

            </div>
            
        </div>
        <div className='navbar-right'>
            <div className='login-btns-div'>
                {
                    user.email ?
                    (
                        <div className='nav-logedin-div'>
                            
                            <div className='nav-user-div'>
                                <img src='./icons/user.svg' className='nav-user-icon' onClick={() => setPopupOpen(old => !old)} />
                                <div className={popupOpen ? 'user-nav-popup' : 'user-nav-popup display-none'} onClick={() => setPopupOpen(old => !old)}>
                                    <Link to="/useradmin/profile"  className='user-nav-link'>dashboard</Link>
                                    <Link to="/useradmin/profile"  className='user-nav-link mobile-user-nav-link'>profile</Link>
                                    <Link to="/useradmin/rental"  className='user-nav-link mobile-user-nav-link'>my rentals</Link>
                                    <Link to="/useradmin/items"  className='user-nav-link mobile-user-nav-link'>my items</Link>
                                    <Link to="/useradmin/requests"  className='user-nav-link mobile-user-nav-link'>my requests</Link>

                                    <Link to="/useradmin/profile" onClick={e => logoutHandler(e)} className='user-nav-link logout-link'>logout</Link>
                                </div>
                            </div>
                            <div className='hamberger-menu-div'  onClick={() => setHamberOpen(old => !old)}>
                                <div className={hamberOpen ? 'hamberger-line ham-one-open' : "hamberger-line "}></div>
                                <div className={hamberOpen ? 'hamberger-line ham-two-open' : "hamberger-line "}></div>
                            </div>
                        </div>
                    ):
                    (
                        <>
                        <Btn background={"black"} text={"signup"} margin={"margin-right"} to={"/signup"} />
                
                <Btn background={"yellow"} text={"login"}  to={"/signin"} />
                        </>
                    )
                }
                
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Header