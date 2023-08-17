import React from 'react'
import { Link } from 'react-router-dom'

const HotDealsCard = ({product}) => {
  return (
    <div className='hot-deal-card'>
            <Link to={"/productpage/" + product._id}>

        <div className='black-overlay'></div>
        <div className='image-mask'>
            <img src={product.images ? product.images[0].src : null }/>
            
        </div>
        <div className='content-div'>
            <div className='off-percent-div'>
                <p className='off-percent' >25%</p>
            </div>
            <p className='price'>${product.price}/{product.hourly ? "hourly" : "daily"}</p>
            <h3 className='name'>{product.name}</h3>
        </div>
        </Link>
    </div>
  )
}

export default HotDealsCard