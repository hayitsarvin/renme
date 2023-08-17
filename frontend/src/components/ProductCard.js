import React, { useEffect, useState } from 'react'
import Btn from '../components/Btn'
import "../styles/components/productcard.css"
import { Link } from 'react-router-dom'
import Loading from './Loading'
import axios from 'axios'
const ProductCard = ({product,myitem=false,itemsSetLoading}) => {
    const [creator , setCreator] = useState({})
    const [loading , setLoading] = useState(true)
    const [btnLoading , setBtnLoading] = useState(false)

    useEffect(() => {
        console.log("[r]" , product);
        if(product.owner){
            axios
            .get('https://rentnow-0oxy.onrender.com/api/auth/findUser/' + product.owner+ "")
            .then((res) => {
                setCreator(res.data);
                setLoading(false)
                console.log("owner" , creator);
            })
            .catch((err) => {
              console.log('Error from ShowBookList', err);
            });
        }
        
    },[product])
   const deletehandler = (id) => {
    setBtnLoading(true)
    axios.delete("https://rentnow-0oxy.onrender.com/api/auth/deleteItem/" + id + "").then( (res) => {
        setBtnLoading(false)
        itemsSetLoading(true)
    })
    
   }
  return (
    <div className='product-card'>
        {
            loading ? (
                <div className='card-loading-div'>
            <Loading />
            </div>
            ) : ( 
                <>
                <Link to={"/productpage/"+ product._id}>
        <div className='product-card-image-mask'>
            <img src={product.images ? product.images[0].src : null }/>
        </div>
        </Link>
        <div className='product-card-content-div'>
            <div className='name-and-availability-div'>
                <div className='name-div'>
                    <div className='creator-image-div'>
                        <img src={creator.image ? creator.image : "/images/6.jpg"} />
                    </div>
                    <div className='creator-name-div'>
                        <p className='creator-name'>by {creator.name}</p>
                        <p className='product-name'>{product.name.length >= 10 ?  (product.name.slice(0,10) + "...") : product.name}</p>
                    </div>
                </div>
                <div className='availability-div'>
                    <p className='label'>Availability</p>
                    <p className='date'>now</p>
                </div>
            </div>
            <div className='btn-and-price-div'>
                <div className='price-div'>
                    <p className='price'>${product.price}/{product.hourly ? "hour" : "day"}</p>
                </div>
                {
                    myitem ? (
                    <div className='delete-item-div'   onClick={() => deletehandler(product._id)} >
                        {
                            btnLoading ? (
                                <Loading />
                            ): 
                            (
                                <img src="/icons/delete.svg" className='delete-item-icon' />
                            )
                        }
                        
                    </div>
                    ):
                    (
                        <Btn background={"yellow"} text={"rent now"} to={"/productpage"}/>
                    )
                }
                
            </div>
        </div>

                </>

            )
        }
        
    </div>
  )
    
}

export default ProductCard