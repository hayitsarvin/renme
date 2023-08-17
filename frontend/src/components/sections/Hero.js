import React from 'react'
import Btn from '../Btn'
import { Link } from 'react-router-dom'

function Hero({dimensions}) {

    if(dimensions.width <=435){
        return (
            <div className='container'>
                <div className='hero-div'>
                    <div className='hero-image-div'>
                        <div className='white-image-overlay'></div>
                        <img src='/images/hero.png' className='hero-img' />
                    </div>
                    <div className='hero-mobile-content-div'>
                        <h1 className='mobile-hero-title'>easy way to rent your stuff with us !</h1>
                        <p className='mobile-hero-text'>also rent car , accessory digital equipment and many more</p>
                        <Btn background={"yellow"} text={"get started"} to={"signin"}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container">
            <div className='hero-div'>
                <div className='yellow-bg-circle'></div>
                <div className='hero-flex'>
                    <div className='hero-call-to-action-div'>
                        <div className='call-to-action-div'>
                            <div className='call-to-action-content'>
                                <h1 className='call-to-action-header'>
                                    rent everything<br/>you want <span>now!</span>
                                </h1>
                               
                                <p className='call-to-action-paragraph'>
                                    This site is for solving all<br/>your needs for a short time with the help of others  
                                </p>
                                <div className='call-to-action-btns-div'>
                                    <Btn background={"black"} text={"rent something"} margin={"margin-right"} size={"btn-lg"} to={"signin"}/>
                                    <Btn background={"yellow"} text={"borrow something"} to={"signin"}/>
                                </div>
                            </div>
                        </div>
                        <div className='hero-product-images-div'>
                            <div className='hero-product-image-mask'>
                                <img src='/images/shoes.png' className='hero-product-image' />
                            </div>
                            <div className='hero-product-image-text-div'>
                                <p className='hero-product-image-text'>
                                + shoes for one night party?<br/>- you can borrow it now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='hero-user-info-div'>
                        <div className='user-information-flex'>
                            <div className='user-info-div'>
                                <h2 className='user-info-header'>active user</h2>
                                <p className='user-info-data'>+1200</p>
                            </div>
                            <div className='user-info-div'>
                                <h2 className='user-info-header'>rental items</h2>
                                <p className='user-info-data'>+4253</p>
                            </div>
                            <div className='user-info-div'>
                                <h2 className='user-info-header'>categories</h2>
                                <p className='user-info-data'>+132</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          )
    }
  
}

export default Hero