import React from 'react'
import CategoriesHomeCard from '../CategoriesHomeCard'
import "../../styles/components/categorysection.css"
import Btn from '../Btn'

const CategoriesSection = () => {
  return (
    <div className='home-categories-section section'>
        <div className='container'>
            <h2 className='title'>categories of rentnow</h2>
            <div className='categories-div'>
                <CategoriesHomeCard name={"mobile"} imageSrc={"/images/mobile.png"} color={"green"}/>
                <CategoriesHomeCard name={"laptop"} imageSrc={"/images/laptop.png"} color={"pink"}/>
                <CategoriesHomeCard name={"accessory"} imageSrc={"/images/watch.png"} color={"orange"}/>
                <CategoriesHomeCard name={"clothes"} imageSrc={"/images/shoes.png"} color={"blue"}/>
                <CategoriesHomeCard name={"camera"} imageSrc={"/images/camera.png"} color={"orange2"}/>
                <CategoriesHomeCard name={"car"} imageSrc={"/images/car.png"} color={"purple"}/>
            </div>
            <div className='see-all-categories-div'>
                <Btn background={"yellow"} text={"all categories"} to={"marketplace"}/>
            </div>
        </div>
    </div>
  )
}

export default CategoriesSection