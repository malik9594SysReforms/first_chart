import React from 'react'
import './RightSidebar.css';
import assets from '../../assets/assets';
import { logout } from '../../config/Firebase';
const RightSidebar = () => {

  const handleLogout = async(e) => {
    e.preventDefault();
    await logout();
  }
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Hassan Raza<img src={assets.green_dot} className="dot" alt="" /></h3>
        <p>
          Hey, There I am Hassan Raza using chat app
        </p>
      </div>
      <hr />
      <div className='rs-media'>
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default RightSidebar
