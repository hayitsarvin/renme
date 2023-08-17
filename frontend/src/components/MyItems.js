import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'

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
const MyItems = ({userInfo , setUserInfo}) => {
    const [myitems , setMyItems] = useState()
    const [loading , setLoading] = useState(true)


useEffect(() => {

          axios
        .get('https://rentnow-0oxy.onrender.com/api/auth/myitems/'+userInfo.id)
        .then((res) => {
            setMyItems(res.data);
            setLoading(false)
         
          
        })
        .catch((err) => {
          console.log('Error from ShowBookList', err);
        });
},[loading])

if(loading){
    return (
        <div className='loading-div-admin'>
    <Loading />
    </div>)
}else{
    return (
        <div className='user-my-rentals-div user-my-items-div'>
            <div className='header-div'>
                <h2 className='title'>my items</h2>
            </div>
            
                <div className='user-rental-items user-my-items'>
                    <div className='add-item-card'>
                    <Link to="/createproduct">
        
                        <p className='plus-icon'>+</p>
                        <p className='add-item-text'>add item</p>
                    </Link>
        
                    </div>
                    {
                        
                    myitems.map((item , id) => {
                        return <ProductCard product={item} key={id} myitem={true} itemsSetLoading={() => setLoading()}/>
                    })
                    }
                </div>
             
            
        </div>
      )
    }
}
  

export default MyItems