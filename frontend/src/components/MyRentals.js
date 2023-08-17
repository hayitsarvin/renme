import React from 'react'
import ProductCard from './ProductCard'

const creator = {
    name:"ali",
    image:"/images/speaker.jpg"
}
const product = {
    name:"nike",
    price:230,
    hourly:false,
    image:"/images/niki2.jpg"
}
const MyRentals = () => {
  return (
    <div className='user-my-rentals-div'>
        <div className='header-div'>
            <h2 className='title'>my rentals</h2>
        </div>
        {/* <div className='user-rental-items'> */}
            {/* <ProductCard creator={creator} product={product} />
            <ProductCard creator={creator} product={product} />
            <ProductCard creator={creator} product={product} />
            <ProductCard creator={creator} product={product} />
            <ProductCard creator={creator} product={product} /> */}
        {/* </div> */}
        <div className='admin-list-empty-div'>
            <p className='empty-text'>list is empty!</p>
        </div>
    </div>
  )
}

export default MyRentals