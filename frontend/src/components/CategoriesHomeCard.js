import React from 'react'
import "../styles/components/categorycard.css"
import { Link } from 'react-router-dom'

const CategoriesHomeCard = ({imageSrc , name , color}) => {
  return (

    <div className='category-card'>
        <div className={'category-back-circle ' + color}></div>
        <div className='category-image-div'>
    <Link to={"/marketplace?categoryParam=" + name}>

            <img src={imageSrc} className='category-image' />
    </Link>

        </div>
    <Link to="/marketplace">

        <h3 className='category-name'>{name}</h3>
    </Link>

    </div>

  )
}

export default CategoriesHomeCard