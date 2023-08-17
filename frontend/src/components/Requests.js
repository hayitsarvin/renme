import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Btn from './Btn'
import RequestCard from './RequestCard'
import axios from 'axios'

const Requests = ({userInfo}) => {
    const [activeTab , setActiveTab] = useState(0)
    const [ResRequests , setResRequests] = useState([])
    const [ReqRequests , setReqRequests] = useState([])
    const [reload , setReload] = useState(false)
    useEffect(() => {
        axios
        .get('https://rentnow-0oxy.onrender.com/api/req/get/'+ userInfo.id)
        .then((res) => {
            console.log("req", res.data);
            
            setResRequests(res.data.filter(req => req.status != 0));
            
         
          
        })
        .catch((err) => {
          console.log('Error from ShowBookList', err);
        });

        axios
        .get('http://localhost:8082/api/req/get/sent/'+ userInfo.id)
        .then((res) => {
            console.log("req", res.data);
            
            setReqRequests(res.data);
            
         
          
        })
        .catch((err) => {
          console.log('Error from ShowBookList', err);
        });
    } , [reload])
  return (
   <div className='requests-outer-div'>
    <h2 className='title'>My Requests</h2>
    <div className='requests-nav-div'>
        <div className={activeTab === 0 ?  'requests-nav-btn active' :'requests-nav-btn'} onClick={() => setActiveTab(0)}>
            <p className='btn-text'>recevied requests</p>
        </div>
        <div className={activeTab === 1 ?  'requests-nav-btn active' :'requests-nav-btn'} onClick={() => setActiveTab(1)}>
            <p className='btn-text'>sent requests</p>
        </div>
    </div>
    <div className='requests-div'>
        
        {
            activeTab === 0 ?
            ResRequests.map((req, id) => {
                return <RequestCard key={id} req={req} type={0} setReload={setReload}/>
            }) : ReqRequests.map((req, id) => {
                return <RequestCard key={id} req={req} type={1} setReload={setReload}/>
            })
        }
    </div>
   </div>
  )
}

export default Requests