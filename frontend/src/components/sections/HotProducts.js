import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import Loading from '../Loading';


const HotProducts = () => {

    const [hotProductsList , setHotProductsList] = useState([])
    const [productActive, setProductActive] = useState(0);
    const [nextProductActive, setNextProductActive] = useState(1);
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
    const pickActiveProduct = (id,active) => {
        if(id == active){
            return "active"
        }else if(id == (active == hotProductsList.length - 1 ? 0 : (active + 1))){
            return "next"
        }else if(id == (active == 0 ? hotProductsList.length -1 : (active - 1))){
            return "prev"
        }else{
            return "d-none"
        }
    }
    
    const nextProduct = () => {
        
        if(productActive < (hotProductsList.length - 1)){
            setProductActive(productActive + 1)

        }else if(productActive == (hotProductsList.length - 1)){
            setProductActive(0)
    
            }
        if(nextProductActive < (hotProductsList.length - 1 )){
            setNextProductActive(nextProductActive + 1)
        }else{
            setNextProductActive(0)
        }
        
    }
    const prevProduct = () => {
        if(productActive > 0){
        setProductActive(productActive - 1)
        }else if(productActive == 0){
            setProductActive(hotProductsList.length - 1)
        }
        if(nextProductActive > 0){
            setNextProductActive(nextProductActive - 1)
        }else{
            setNextProductActive(hotProductsList.length - 1)
        }
    }
    if(loading){
        return <div className='loading'>
            <Loading />
        </div>
    }else{
        return (
            <div className='hot-products-section section'>
            <div className="container">
                <div className='next-product-image-div'>
                    {
                        hotProductsList.map((item,id) => {
                            return(
                                <img className={'next-product-image ' + pickActiveProduct(id,nextProductActive)}  src={item.images[0].src}/>
        
                            )
                        })
                    }
                </div>
                
                <div className='info-side'>
                    <div className='content-div'>
                        <h2 className='title'>our hot products</h2>
                        <div className='active-product-div'>
                            <h3 className='hot-product-name'>{hotProductsList[productActive].name}</h3>
                            <p className='hot-product-disc'>{hotProductsList[productActive].disc}</p>
                        </div>
                        <h3 className='price'>${hotProductsList[productActive].price}{hotProductsList[productActive].hourly ? "/hour" : "/day"}</h3>
                    </div>
                    
                    <div className='slide-btns-div'>
                        <div className='left-slide-div' onClick={prevProduct}>
                            <div className='slide-btn-circle'>
                                <img src='/icons/arrow_left.png' className='slide-icon'/>
                            </div>
                        </div>
                        <div className='slide-number-div'>
                            {
                                hotProductsList ? (hotProductsList.map((item,id) => {
                                    return(
                                        <div className={'slide-number-circle ' +  pickActiveProduct(id,productActive)} ></div>
        
                                    )
        
                                })):(
                                    <></>
                                )
                            }
                                {/* <div className='slide-number-circle active'></div>
                                <div className='slide-number-circle'></div>
                                <div className='slide-number-circle'></div> */}
                        </div>
                        <div className='right-slide-div' onClick={nextProduct}>
                        <div className='slide-btn-circle'>
                                <img src='/icons/arrow_right.png' className='slide-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-side'>
                    <div className='hot-product-image-mask'>
                        {/* <img src='/images/shini.jpg' className='hot-product-image' /> */}
                        {
                       hotProductsList ? (hotProductsList.map((item,id) => {
                            return(
                                <img className={'hot-product-image ' + pickActiveProduct(id,productActive)}  src={item.images[0].src}/>
        
                            )
                        })) : (
                            <></>
                        )
                    }
                    </div>
                </div>
                </div>
                <div className='background-circle'></div>
        
            </div>
          )
    }
  
}

export default HotProducts