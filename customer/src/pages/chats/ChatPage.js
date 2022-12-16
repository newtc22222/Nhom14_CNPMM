import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const ChatPage = () => {
  const auth = useContext(UserContext);
  const user = auth.user;

  if(!window.sessionStorage.getItem("userId")) {
    return <Navigate to="/login"/>
  }
  
    return (
    <div>{user._id}</div>
  )
}

export default ChatPage;