import React from 'react'
import { Link } from 'react-router-dom'

const MobileCategoryCard = ({name,icon}) => {
  return (
    <Link to="/marketplace" >
        <div className='mobile-categories-card'>
            <img src={icon} className='category-icon' />
            <p className='category-name'>{name}</p>
        </div>
    </Link>
  )
}

export default MobileCategoryCard