import React from 'react';
import './Suggestions.css';
import { Avatar } from '@mui/material';

function Suggestions() {
  return (
    <div className='suggestions d-none d-lg-block'>
      <div className="right-side">
        <div className="profile-title">
          <div className="profile-left">
            <div className="image">
              <img src="https://images.pexels.com/photos/10176997/pexels-photo-10176997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" width={56} height={56} />
            </div>
            <div className="details">
              <p className='name'>Sneha</p>
              <p className='surname'>Sneha_prabhakaran</p>
            </div>
            <div className="profile-right">
              <p>Switch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestions__title">
        Suggested for you</div>
        <div className="suggestions__usernames">
          <div className="suggestions__username">
            <div className="username__left">
              {/* <span className="avatar">
                <Avatar>S</Avatar>
              </span> */}
              <img src="https://images.pexels.com/photos/3812979/pexels-photo-3812979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={45} height={45} />
              <div className="username__info">
                <span className='username'>Sona_01</span>
                <span className="relation">Follows you</span>
              </div>
            </div>
            
            <button className='follow__button'>Follow</button>
          </div>

          <div className="suggestions__username">
            <div className="username__left">
              {/* <span className="avatar">
                <Avatar>S</Avatar>
              </span> */}
              <img src="https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={45} height={45} />
              <div className="username__info">
                <span className='username'>Devi_02</span>
                <span className="relation">New to Instagram</span>
              </div>
            </div>
            
            <button className='follow__button'>Follow</button>
          </div>
          <div className="suggestions__username">
            <div className="username__left">
              {/* <span className="avatar">
                <Avatar>S</Avatar>
              </span> */}
              <img src="https://images.pexels.com/photos/3564972/pexels-photo-3564972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={45} height={45} />
              <div className="username__info">
                <span className='username'>Anna_03</span>
                <span className="relation">New to Instagram</span>
              </div>
            </div>
            
            <button className='follow__button'>Follow</button>
          </div>
          <div className="suggestions__username">
            <div className="username__left">
              {/* <span className="avatar">
                <Avatar>S</Avatar>
              </span> */}
              <img src="https://images.pexels.com/photos/1805866/pexels-photo-1805866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={45} height={45} />
              <div className="username__info">
                <span className='username'>Ella_04</span>
                <span className="relation">New to Instagram</span>
              </div>
            </div>
            
            <button className='follow__button'>Follow</button>
          </div>
          <div className="suggestions__username">
            <div className="username__left">
              {/* <span className="avatar">
                <Avatar>S</Avatar>
              </span> */}
              <img src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={45} height={45} />
              <div className="username__info">
                <span className='username'>Miska_05</span>
                <span className="relation">New to Instagram</span>
              </div>
            </div>
            
            <button className='follow__button'>Follow</button>
          </div>


        </div>
    </div>
  )
}

export default Suggestions