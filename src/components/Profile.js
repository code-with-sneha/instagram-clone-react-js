import React from 'react';
import '../components/Profile.css';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {
  return (
    <div className='card_profile'>
      <div className="card1">
            <div className="image_1">
          <img className='img-mrg' src="https://images.pexels.com/photos/10176997/pexels-photo-10176997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" width={120} height={120} />
            <div>
              <h5 className='name'>Sneha</h5>
              <button className='btn1'>Edit profile</button>
              <button className='btn2'>View archive</button><SettingsIcon className='icon' />
              <p className='p1'>0 posts</p>
              <p className='p2'>43 followers</p>
              <p className='p3'>90 following</p>
              <h6 className='name-1'>Sneha_prabhakaran</h6>
              <AddIcon  className='ad-icon'/>
              <p className='para'>New</p>
            </div>
            </div> 
            <hr className='dash' /> 
            <div className='bottom'>
            <img src="./images/icon1.png" alt="i1" />
            <p className='mt-3 g-3'>POSTS</p>
            <img src="./images/icon2.png" alt="i2" />
            <p className='mt-3 g-3'>SAVED</p>
            <img src="./images/icon3.png" alt="i3" />
            <p className='mt-3 g-3'>TAGGED</p>
            </div>
            <img src="./images/icon4.png" alt="i4" className='icon-c' />
            <h2 style={{marginLeft: '9%'}}>Share Photos</h2>
            <p style={{marginLeft: '8%'}}>When you share photos, they will appear on your profile.</p>
            <button style={{marginLeft: '8%'}} className='sharbtn'>Share your first photo</button>
          </div>
      </div>
    
  )
}

export default Profile