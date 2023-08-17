import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyProfile = ({userInfo, setUserInfo}) => {
    let navigate = useNavigate();
    const [inputs, setInputs] = useState({...userInfo.user});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const updateHandler = (e) => {
        e.preventDefault()
        axios
        .put('https://rentnow-0oxy.onrender.com/api/auth/' + userInfo.id + "" , {
            ...inputs
        }).then((res) => {
            setUserInfo(values => ({...values , name:res.data.name , location: res.data.loaction}))
            console.log(res);
            
          })
          .catch((err) => {
            console.log(err);
          });
    }
  return (
    <div className='my-profile-div'>
        <div className='header-div'>
            <h2 className='title'>My Profile</h2>
        </div>
        <div className='info-div'>
            <form  className='form-profile' onSubmit={(e) => updateHandler(e)}>
        <div className='name-and-email'>
        <div class="form__group field name-group">
            <input type="input" class="form__field" placeholder="Name" name="name" id='name'  required value={inputs.name || ""} onChange={(e) => handleChange(e)} />
            <label for="name" class="form__label">Name</label>
        </div>
        <div class="form__group field name-group verified disabled">
            <input type="email" class="form__field" placeholder="email" name="email" id='name'  required disabled value={userInfo.email || ""} />
            <label for="email" class="form__label">Email</label>
        </div>
        
        </div>
        <div class="form__group field name-group">
            <input type="input" class="form__field" placeholder="location" name="location" id='location'  required value={inputs.location || ""} onChange={(e) => handleChange(e)} />
            <label for="location" class="form__label">location</label>
        </div>
        <div class="form__group field phone-group verified disabled">
            <input type="input" class="form__field" placeholder="phone" name="phone" id='phone' disabled  required value={userInfo.user ? userInfo.user.phone : "" }  />
            <label for="phone" class="form__label">phone</label>
        </div>
        <input type="submit" className='btn yellow' value="update"/>
        
        </form>
        </div>
    </div>
  )
}

export default MyProfile