import React, { useEffect, useState } from 'react'
import "../styles/pages/productpage.css"
// import PickDate from '../components/PickDate'
import Btn from '../components/Btn'
import axios from 'axios';
import RentalFormPopup from '../components/RentalFormPopup'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import PickDate from '../components/PickDate';
const ProductPage = () => {
  const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [item, setItems] = useState();
    const [loading, setLoading] = useState(true);
    const [rentPopup, setRentPopup] = useState(false);
    const { id } = useParams();
    const [idx, setIdx] = useState(id);
    const [user, setUser] = useState();
    const [whyText, setWhyText] = useState("");
    const [pickedDate , setPickedDate] = React.useState({
      startDate:{
          month: 0,
          day:0,
          date:null
      },
      endDate:{
          month: 0,
          day:0,
          date:null
      }
  })
    const navigate = useNavigate()
    useEffect(() => {
      if(item){
        setLoading(false)
        console.log("item after:" , item);


      }
    }, [item])
    useEffect(() => {
       
            axios
            .get('https://rentnow-0oxy.onrender.com/api/'+id+ "")
            .then((res) => {
              setItems(res.data)
              console.log("item out:" , item);
              
            })
            .catch((err) => {
              console.log('Error from ShowBookList', err);
            });
            


        //   axios
        //   .post('http://localhost:8082/api', {
        //     name:"speaker",
        //     description:"This 3 site is for solving all your needs for a short time with the help of others but here we care about user exprince and take very care of our costumre.",
        //     price:120,
        //     hourly:true,
        //     images:[{
        //         src:"/images/speaker.jpg"
        //     },
        //     {
        //         src:"/images/niki.jpg"
        //     }],
        //     categories:[{
        //         name:"speaker"
        //     }],
        //     featured:true,
        //     booked:[
        //         {
        //             start:new Date("<2023-06-15>"),
        //             end:new Date("<2023-06-17>")
        //         }
        //     ],
        //     location:"this is the adresss"
        //   })
        //   .then((res) => {
            
        //     console.log('fdsf in CreateBook!');
    
            
        //   })
        //   .catch((err) => {
        //     console.log('Error in CreateBook!');
        //   });

      }, [id]);
      useEffect(() => {
        axios
        .post('https://rentnow-0oxy.onrender.com/api/auth/getUsername', {
          
        },
        {
        headers:{
          'x-access-token': localStorage.getItem("token")
        }
      })
        .then((res) => {
          
          // console.log("product page req user" , res.data);
          // localStorage.setItem("token" , res.data.token)
          if(res.data.isLoggedIn){
            setUser(res.data.user)
            // navigate("/useradmin/items")
          }else{
            navigate("/signin")
      
      
            
            
           
            
          }
           
          
        })
        .catch((err) => {
          console.log(err);
        });
       },[])
       const submitRequestHandler = () => {
        console.log("test req dates : ", startDate , endDate);
        alert("clicked")
        axios
        .post('https://rentnow-0oxy.onrender.com/api/req/', {
          customer: user.id,
          product: item._id,
          owner:item.owner,
          reasonToRent:whyText,
          startDate:startDate,
          endDate:endDate
          
        })
        .then((res) => {
          
          
         console.log("req sub" ,res);
           
          
        })
        .catch((err) => {
          console.log(err);
        });
       }
      if(loading){
        return <div className='loading'>
            <Loading />
        </div>
      }else{
        return (

            <div className='container'>
              {
                rentPopup ? (
                  <RentalFormPopup  close={() => setRentPopup(false)} dates={item.booked} setPickedDate={setPickedDate} pickedDate={pickedDate} whyText={whyText} setWhyText={setWhyText} submitRequestHandler={submitRequestHandler} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} hourly={item.hourly} price={item.price}/>

                ):(
                  null
                )
              }
            <div className='product-page'>
                
                <div className='product-image-side'>
                    <div className='product-image-div'>
                        <img src={item.images[0].src} />
                    </div>
                    <div className='slide-btns-div'>
                        <div className='left-slide-div' >
                            <div className='slide-btn-circle'>
                                <img src='/icons/arrow_left.png' className='slide-icon'/>
                            </div>
                        </div>
                        <div className='slide-number-div'>
                           
                                <div className='slide-number-circle active'></div>
                                <div className='slide-number-circle'></div>
                                <div className='slide-number-circle'></div>
                        </div>
                        <div className='right-slide-div' >
                        <div className='slide-btn-circle'>
                                <img src='/icons/arrow_right.png' className='slide-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-content-side'>
                    <div className='product-content'>
                        <div className='product-name-price-div'>
                            <h1 className='title'>{item.name} </h1>
                            <p className='price'>${item.price}/{item.hourly ? "hourly" : "daily"}</p>
                        </div>
                        {/* <div className='rating-div'>
                            <img src='/icons/star.svg' />
                            <p className='rating-text'>{item.booked[0].start}</p>
                        </div> */}
                        <div className='disc-div'>
                            <p className='disc'>{item.description}</p>
                        </div>
                        <div className='location-div'>
                            <h3 className='label'>location :</h3>
                            <h4 className='value'>{item.location}</h4>
                        </div>
                        <PickDate dates={item.booked} setPickedDate={setPickedDate} pickedDate={pickedDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} hourly={item.hourly}/>    
                        <div className='btns-div'>
                          <span onClick={() => setRentPopup(!rentPopup)}>
                            <Btn background={"black"} text={"Request rent"} margin={"margin-right"} />
                            </span>
                            <Btn background={"yellow"} text={"chat with owner"}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          )
      }
  
}

export default ProductPage