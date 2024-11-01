import React from 'react'
import Login from './pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import Chat from './pages/chat/Chat'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    <ToastContainer/>
      <Routes>
      <Route path='/' element={<Login/>}/>  
      <Route path='/chat' element={<Chat/>}/>
      <Route path="/profile-update" element={<ProfileUpdate/>}/>
      </Routes>
    </>
  )
}

export default App
