import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { ChatEngine } from 'react-chat-engine';
const MyChats = ({userInfo ,setUserInfo}) => {
  return (
    <div className='chats-div'>
        <ChatEngine
        projectID={"7617dc08-e9b8-496e-896c-2685050cf967"}
        userName={"TestUser1"}
        userSecret={"Testing1234"}
        height="75vh"
      />
    </div>
  )
}

export default MyChats