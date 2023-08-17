import React from 'react'
import "../../styles/components/footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (

    <div className='footer section'>
        <div className='footer-back-circle'></div>
    <div className='container'>

            <div  className='footer-content'>
                <div className='footer-logo-div'>
                    <h2 className='footer-logo'>rent<span>Now</span></h2>
                </div>
                <div className='links-content-div'>
                    <div className='link-div'>
                        <h2 className='footer-title'>pages</h2>
                        <Link to={"/"}>
                        <h4 className='link'>home</h4>
                        </Link>
                        <Link to={"/marketplace"}>

                        <h4 className='link'>marketplace</h4>
                        </Link>
                        <Link to={"/signin"}>
                        <h4 className='link'>signin</h4>
                        </Link>
                    </div>
                    <div className='link-div'>
                        <h2 className='footer-title'>pages</h2>
                        <Link to={"/"}>
                        <h4 className='link'>home</h4>
                        </Link>
                        <Link to={"/marketplace"}>

                        <h4 className='link'>marketplace</h4>
                        </Link>
                        <Link to={"/signin"}>
                        <h4 className='link'>signin</h4>
                        </Link>
                    </div>
                    <div className='link-div'>
                        <h2 className='footer-title'>pages</h2>
                        <Link to={"/"}>
                        <h4 className='link'>home</h4>
                        </Link>
                        <Link to={"/marketplace"}>

                        <h4 className='link'>marketplace</h4>
                        </Link>
                        <Link to={"/signin"}>
                        <h4 className='link'>signin</h4>
                        </Link>
                    </div>
                    
                </div>
                <div className='creator-div'>
                        <p className='creator'>designed and developed by <span>sinmoro</span></p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer