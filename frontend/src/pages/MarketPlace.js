import React, { useEffect, useState } from 'react'
import "../styles/pages/marketplace.css"
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
import axios from 'axios'
import Loading from '../components/Loading'
import { useNavigate, useParams } from 'react-router-dom'

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
const MarketPlace = ({dimensions}) => {
    const [items , setItems] = useState([])
    const [loading , setLoading] = useState(true)
    const { categoryParam } = useParams();
   
    const navigate = useNavigate()
    const [category , setCategory] = useState(categoryParam)
    const [price , setPrice] = useState("all")
    const [sort , setSort] = useState()
    const [filterdItems , setFilterdItems] = useState([])
    const filter = () => {
        setFilterdItems(items)
        if(category == "all"){

        }else if(category){
        

            setFilterdItems(items.filter((item => item.categories == category)))
            console.log("f", filterdItems);

        }
        

        if(price == "hourly" || price == "daily"){
        console.log("fp",filterdItems);

            if(price == "hourly"){

                setFilterdItems(filterdItems.filter((item => item.hourly == true)))
        console.log("fh",filterdItems);


            }else if(price == "daily"){
                setFilterdItems(filterdItems.filter((item => item.hourly == false)))
        console.log("fd",filterdItems);


            }
        }
        console.log("f3",filterdItems);

        
        
        setLoading(false)
    }
    function scrollToTop() {
        window.scrollTo(0, 0);
      }
    useEffect(() => {
        axios
        .get('https://rentnow-0oxy.onrender.com/api/')
        .then((res) => {
            setItems(res.data);
            setFilterdItems(() => res.data);
            
          
        })
        .catch((err) => {

        });
        scrollToTop()

    } , [])
    useEffect(() => {
        filter()
    }, [items,category,price])
    
    useEffect(() => {
       
    }, [filterdItems])

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
          
          
          // localStorage.setItem("token" , res.data.token)
          if(res.data.isLoggedIn){
            
            // navigate("/useradmin/items")
          }else{
            navigate("/signin")
      
      
            
            
           
            
          }
           
          
        })
        .catch((err) => {
          console.log(err);
        });
       },[])
  return (
    <div className='marketplace-page'>
        <div className='container'>
            <div className='marketplace-div'>
                <div className='filters-div'>
                    <Filters mobile={dimensions} setCategory={setCategory} category={category} setPrice={setPrice} price={price}/>
                </div>
                <div className='items-div'>
                    <h1 className='title'>marketplace</h1>
                    <div className='marketplace-cards-div'>
                        {/* <ProductCard creator={creator} product={product}/> */}
                        {
                            loading ? (
                                <div className='marketplace-loading-div'>
                                    <Loading />
                                </div>
                            ) : (
                                <>
                                {
                                    filterdItems.map((item , id) => {
                                        return <ProductCard product={item} />
                                    })
                                }
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MarketPlace