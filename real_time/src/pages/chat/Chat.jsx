import React from 'react';
import './Chat.css';
import LeftSideBar from '../../components/leftSidbar/LeftSideBar';
import ChatBox from '../../components/chatbox/ChatBox';
import RightSidebar from '../../components/rightSidebar/RightSidebar';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar/>
        <ChatBox/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Chat
