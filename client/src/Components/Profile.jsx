import React from 'react'
import '../styles/profile.css'
function Profile() {
  return (
    <div className='profile-parent-container'>
        <div className='banner'></div>
        <img id="profile-img" src='/assets/profileImg.jpeg' alt='demo'/>
        <div id='text'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Hello everyone, I am <span>Bikrant Thakur</span>,<br/>a full stack develop, crafting ideas into reality.
        </div>
    </div>
  )
}

export default Profile
