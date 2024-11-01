import React, { useState } from 'react';
import './ProfileUpdate.css';
import assets from '../../assets/assets'
import { toast } from 'react-toastify';
const ProfileUpdate = () => {
  const [image, setImage] = useState(false);

  const handleSave =()=>{
    
  }
  return (
    <div className='profile'>
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor='avatar'>
            <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden />
            <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt='' />
            Upload Profile Image
            
          </label>
          <input type='text' placeholder='Your Name' required />
          <textarea placeholder='Write Profile Bio' required></textarea>
          <button type='submit' onClick={()=>{handleSave()}}>Save</button>
        </form>
        <img className="profile-pic" src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate
