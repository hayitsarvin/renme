import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const RequestCard = ({req , setReload ,type}) => {
    const [product , setProduct] = useState()
    const [loading , setLoading] = useState(true)
    // const [date , setDate] = useState(new Date(req.startDate))
    
    useEffect(() => {
        axios
        .get('https://rentnow-0oxy.onrender.com/api/' + req.product)
        .then((res) => {
            setProduct(res.data);
            setLoading(false)
         
          
        })
        .catch((err) => {
          console.log('Error from ShowBookList', err);
        });
    },[])
    const reqAcceptHandler = () => {
        // setLoading(true)
        axios
        .put('https://rentnow-0oxy.onrender.com/api/req/' + req._id , {
            status: 1
        })
        .then((res) => {
            
            setReload(true)
         
          
        })
        .catch((err) => {
          console.log('Error from ShowBookList', err);
        });
        
    }
    const reqRejectHandler = () => {
        // setLoading(true)
        axios
        .put('https://rentnow-0oxy.onrender.com/api/req/' + req._id , {
            status: 0
        })
        .then((res) => {
            
            setReload(true)
         
          
        })
        .catch((err) => {
          console.log('Error from ShowBookList', err);
        });
        
    }

    const [differenceInDays , setDifferenceInDays] = useState(0)
  const diffInDays = () => {
    if(req.endDate){
      var Difference_In_Time = new Date(Date.parse(req.endDate)) - new Date(Date.parse(req.startDate));
      
      // To calculate the no. of days between two dates
      setDifferenceInDays(Math.ceil(Difference_In_Time / (1000 * 3600 * 24)));
    }else if(req.startDate){
      setDifferenceInDays(1)
    }else{
      setDifferenceInDays(0)

    }
  }
    useEffect(() => {
        diffInDays()
    }, [req])
    if(loading){
        return (
            <div className='req-card-loading-div'>
                <Loading />
            </div>
        )
    }else{
        if(type === 0){
            return (
                <div className='requestcard-div ' >
                  
                    <div className='request-product-div'>
            
                    <div className='image-div-mask'>
                        <img src='./images/shini.jpg' />
                    </div>
            
                    <div className='product-info'>
                        <div className='price-and-name-div'>
                            <h3 className='product-name'>{product.name}</h3>
                            <p className='price'>${product.price}/{product.hourly ? "hourly" : "daily"} * {differenceInDays } nights = ${differenceInDays * product.price}</p>
                        </div>
                        <div className='req-why-div'>
                            <p className='req-why'>{req.reasonToRent}</p>
                        </div>
                        <div className='booked-dates-div'>
                            <div className='start-day-div'>
                                <h5 className='date-label'>start :</h5>
                                <p className='date'>{new Date(Date.parse(req.startDate)).toDateString()}</p>
                            </div>
                            <div className='end-day-div'>
                                <h5 className='date-label'>end :</h5>
                                <p className='date'>{new Date(Date.parse(req.endDate)).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='request-actions-div'>
                        {
                            req.status == 1 ? (
                                <div className='req-accepted-div'>
                                    <img src='/icons/check.svg' />
                                    <p className='req-accepted-text'>accepted</p>
                                </div>
                            ):(
                                <>
                                <div className='btn-accept' onClick={() => reqAcceptHandler()}>
                                <p className='btn-text'>accept</p>
                            </div>
                            <div className='btn-reject' onClick={() => reqRejectHandler()}>
                                <p className='btn-text'>reject</p>
                            </div>
                            </>
                            )
                        }
                       
                        <div className='btn-chat'>
                            <p className='btn-text'>chat with buyer</p>
                        </div>
                    </div>
            
                    
                </div>
              )
        } else if(type === 1){
            return (
                <div className='requestcard-div ' >
                  
                    <div className='request-product-div'>
            
                    <div className='image-div-mask'>
                        <img src='./images/shini.jpg' />
                    </div>
            
                    <div className='product-info'>
                        <div className='price-and-name-div'>
                            <h3 className='product-name'>{product.name}</h3>
                            <p className='price'>${product.price}/{product.hourly ? "hourly" : "daily"} * {differenceInDays } nights = ${differenceInDays * product.price}</p>
                        </div>
                        <div className=''>
                        {
                            req.status == 0 ? (
                                <div className='req-status-div waiting'>
                                <p>waiting for owner to respond to your request...</p>
                            </div>
                            ): req.status == 2 ? (
                                <div className='req-status-div rejected'>
                                <p>owner rejected your request</p>
                            </div>
                            ) :  req.status == 1 ? (
                                <div className='req-status-div accepted'>
                                <p>owner accepted your request</p>
                            </div>
                            ) : null
                        }
                        </div>
                        <div className='booked-dates-div'>
                            <div className='start-day-div'>
                                <h5 className='date-label'>start :</h5>
                                <p className='date'>{new Date(Date.parse(req.startDate)).toDateString()}</p>
                            </div>
                            <div className='end-day-div'>
                                <h5 className='date-label'>end :</h5>
                                <p className='date'>{new Date(Date.parse(req.endDate)).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='request-actions-div'>
                        {
                            req.status == 1 ? (
                                <div className='btn-pay'>
                                     <p className='btn-text'>pay</p>
                                </div>
                            ):(
                                <>
                               
                            </>
                            )
                        }
                       
                        <div className='btn-chat'>
                            <p className='btn-text'>chat with owner</p>
                        </div>
                    </div>
            
                    
                </div>
              )
        }
        
    }
 
}

export default RequestCard