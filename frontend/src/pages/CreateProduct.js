import React, { useEffect, useState } from 'react'
import Btn from '../components/Btn'
import "../styles/pages/createproductpage.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateProduct = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState("");
    const [file, setFile] = useState();
    const [name , setName] = useState("");
    const [price , setPrice] = useState();
    const [priceType , setPriceType] = useState("");
    const [description , setDescription] = useState("");
    const [location , setLocation] = useState("");
    const [category , setCategory] = useState("");
    const [owner , setOwner] = useState()
    function handleChange(e) {
        console.log(e.target.files);
        
        setImages(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }

    const submitHandler = (e) => {
        setLoading(true)

        let formData = new FormData();
        const time =  new Date()
        // console.log("time" , time.now());
       const nameFile = "" + Date.now() + "" + file.name + ""
       console.log("nameeee" , nameFile);
formData.append("file", file , nameFile);

axios.post('https://rentnow-0oxy.onrender.com/api/uploadImage', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }).catch((err) => {
    console.log('Error in CreateBooasfdfdasfdsk!');
  });
        e.preventDefault()
        axios
          .post('https://rentnow-0oxy.onrender.com/api', {
            name:name,
            description:description,
            price:price,
            hourly:priceType == "hourly" ? true : false,
            images:[{
                src:nameFile
            }],
            categories:category ? category : "mobile"
            ,
            featured:true,
            booked:[
                {
                    start:new Date("<2023-06-15>"),
                    end:new Date("<2023-06-17>")
                }
            ],
            location:location,
            owner:owner,
            
          })
          .then((res) => {
            setLoading(false)
            navigate("/useradmin/items")
    
            
          })
          .catch((err) => {
            console.log('Error in CreateBook!');
          });
    }
    useEffect(() => {
    
        axios
        .post('https://rentnow-0oxy.onrender.com/api/auth/getUsername', {
          
        },
        {
        headers:{
          'x-access-token': localStorage.getItem("token")
        }
      },[])
        .then((res) => {
          
          console.log(res);
          // localStorage.setItem("token" , res.data.token)
          if(res.data.isLoggedIn){
            setOwner(res.data.user.id)
          }else{
            console.log("false",localStorage.getItem("token"));
    
            // navigate("/")
            
           
            
          }
           
          
        })
        .catch((err) => {
          console.log(err);
        });
        
          
      } , [])
  return (
    <div className='container'>
                {/* <RentalFormPopup /> */}
            <div className='product-page create-product-page'>
                
                <div className='product-image-side'>
                    <div className='product-image-div'>
                        <img  src={images ? images : "./images/niki2.jpg"}/>
                    </div>
                   <div className='small-images-div'>
                    <div className='small-image-div'>
                        {/* {
                            images.length >= 2 ?
                            (
                                images.map((item , id) => {
                                    if(id != 0){
                                        <img className='small-image'  src={images[id] ? images[id] : ""}/>
                                    }
                                })
                            ): ""
                        } */}
                        {/* <img  src={images ? images : "./images/niki2.jpg"}/> */}
                    </div>
                   </div>
                   
                </div>
                <div className='product-content-side'>
                    <div className='product-content'>
                        <div className='product-name-price-div'>
                            <h1 className='title'>add a item</h1>
                           
                        </div>
                        {/* <div className='rating-div'>
                            <img src='/icons/star.svg' />
                            <p className='rating-text'>{item.booked[0].start}</p>
                        </div> */}
                        <form onSubmit={e => submitHandler(e)} id="create-product-form">
                        <div className='input-price-name-div'>
                            <div class="form__group field name-group">
                                <input type="input" class="form__field" placeholder="Name" name="name" id='name'  required value={name} onChange={(e) => setName(e.target.value)} />
                                <label for="name" class="form__label">Name</label>
                            </div>
                            <div class="form__group field price-group">
                                <input type="number" class="form__field" placeholder="price" name="price" id='price' required value={price} onChange={(e) => setPrice(e.target.value)} />
                                <label for="price" class="form__label">Price</label>
                            </div>
                            <div className='dropdown-div'>
                                {/* <label for="cars">Choose a car:</label> */}
                                <select className='price-option' id="price-option" name="price-option" value={priceType} onChange={(e) => setPriceType(e.target.value)}>
                                    <option value="hourly">Hourly</option>
                                    <option value="daily">Daily</option>
                                </select>
                            </div>
                            
                        </div>
                        <div class="form__group field">
                            {/* <input type="input" class="form__field" placeholder="enter description" name="description" id='description' required /> */}
                            <textarea class="form__field" rows="4" cols="25" placeholder="enter description" name='description' id='description' required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <label for="description" class="form__label">Description</label>
                        </div>
                        <div class="form__group field">
                                <input type="input" class="form__field" placeholder="location" name="location" id='location' required value={location} onChange={(e) => setLocation(e.target.value)}/>
                                <label for="location" class="form__label">Location</label>
                        </div>
                        <div className='dropdown-div-category'>
                                <label for="category">pick a category:</label>
                                <select className='category-option' id="category-option" name="category-option" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="mobile">mobile</option>
                                    <option value="laptop">laptop</option>
                                    <option value="accessory">accessory</option>
                                    <option value="car">car</option>
                                    <option value="camera">camera</option>
                                    <option value="clothes">clothes</option>
                                    <option value="shoes">shoes</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <label for="images" class="drop-container">
                                <span class="drop-title">Drop files here</span>
                                or
                                <input type="file" id="images" accept="image/*" required  onChange={handleChange}/>
                            </label>
                        <div className='btns-div' >
                            {/* <Btn background={"black"} text={"Create item"} margin={"margin-right"} /> */}
                            <input type="submit" className="btn yellow" value={loading ? "loading..." : "create item"}/>
                        </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default CreateProduct