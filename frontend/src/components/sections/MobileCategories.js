import React from 'react'
import "../../styles/components/mobilecategories.css"
import { Link } from 'react-router-dom'
import MobileCategoryCard from '../MobileCategoryCard'
const MobileCategories = () => {
  return (
    <div className='container'>
        <div className='mobile-categories-section'>
            <div className='title-and-more-div'>
                <h2 className='title'>what do you need?</h2>
                {/* <p className='see-all'>see-all</p> */}
            </div>
            <div className='x-scroll'>
            <div className='mobile-categories-list'>
                <MobileCategoryCard name={"laptop"} icon={"/icons/laptop.svg"}/>
                <MobileCategoryCard name={"mobile"} icon={"/icons/mobile.svg"}/>
                <MobileCategoryCard name={"headphones"} icon={"/icons/headphones.svg"}/>
                <MobileCategoryCard name={"car"} icon={"/icons/car.svg"}/>
                <MobileCategoryCard name={"camera"} icon={"/icons/camera.svg"}/>
              
            </div>
            </div>
        </div>
    </div>
  )
}

export default MobileCategories