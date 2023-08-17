import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import "../../styles/components/mobilepopularitems.css"
import Loading from '../Loading'
import axios from 'axios'

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
const product1 = {
    name:"speaker",
    price:23,
    hourly:true,
    image:"/images/speaker.jpg"
}
const product2 = {
    name:"nike black",
    price:55,
    hourly:false,
    image:"/images/niki.jpg"
}
const product3 = {
    name:"shini bag",
    price:230,
    hourly:false,
    image:"/images/shini.jpg"
}
const MobilePopularItems = () => {
    const [hotProductsList , setHotProductsList] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get('https://rentnow-0oxy.onrender.com/api/')
        .then((res) => {
            setHotProductsList(() => res.data.filter(item => item.featured == true));
          setLoading(false)
          
        })
        .catch((err) => {
          console.log('Error from ShowBookList', err);
        });
        
    } , [])
  return (
    <div className='container'>
        <div className='mobile-popular-section'>
            <div className='title-and-more-div'>
                <h2 className='title'>Popular items</h2>
                <p className='see-all'>see-all</p>
            </div>
            {
                loading ? (
                    <div className='loading-div'>
                        <Loading />
                    </div>
                ) :(
                    <div className='x-scroll'>
                    <div className='mobile-popular-list'>
                        
                        {
                                hotProductsList.map((item,id) => {
                                    return(
                                        <ProductCard creator={creator} product={item}/>
        
                
                                    )
                                })
                            }
                      
                    </div>
                    </div>
                )
            }
           
        </div>
    </div>
  )
}

export default MobilePopularItems