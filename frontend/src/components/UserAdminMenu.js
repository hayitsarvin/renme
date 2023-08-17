import React from 'react'
import Btn from './Btn'

const UserAdminMenu = ({userInfo}) => {
  return (
    <div className='user-admin-menu-div'>
        <div className='user-info-div'>
            <div className='user-image-mask'>
                <img src={userInfo.image ? userInfo.image : "/images/6.jpg"} className='user-image' />
            </div>
            {/* <h3 className='user-name'>{userInfo.user.name.length > 1 ? userInfo.user.name : ""}</h3> */}
            <p className='user-email'>{userInfo.email}</p>
            
        </div>
        <div className='user-menu-links-div'>
                <div className='user-menu-link'>
                    <Btn background={"yellow"} text={"My profile"} to={"/useradmin/profile"}/>
                </div>
                <div className='user-menu-link'>
                    <Btn background={"yellow"} text={"My rentals"} to={"/useradmin/rental"}/>
                </div>
                <div className='user-menu-link'>
                    <Btn background={"yellow"} text={"My items"} to={"/useradmin/items"}/>
                </div>
                <div className='user-menu-link'>
                    <Btn background={"yellow"} text={"rent requests"} to={"/useradmin/requests"} />
                </div>
                <div className='user-menu-link'>
                    <Btn background={"yellow"} text={"My chats"} to={"/useradmin/chats"}/>
                </div>
                <div className='user-menu-link'>
                    <Btn background={"yellow"} text={"payment method"} />
                </div>
                
            </div>
    </div>
  )
}

export default UserAdminMenu