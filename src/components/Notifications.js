import React from 'react';
import '../components/Notifications.css';
function Notifications() {
  return (
    <div className='not'>
        <div className='msg_1'>
        <h3>Notifications</h3>
        <h6 className='earlier'>Earlier</h6>
        <div className="sugusr">
            <div className="username__left">
              {/* <span className="avatar">
                <Avatar>S</Avatar>
              </span> */}
              <img src="https://images.pexels.com/photos/3812979/pexels-photo-3812979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={45} height={45} />
              <div className="username__info">
                <span className='username'>Sona_01,</span>
                <p className='para-01'>Who you might know, is on Instagram. 8w</p>
                </div>
            </div>
            
            <button className='flbtn'>Follow</button>
          </div>
          <div className="sugusr">
            <div className="username__left">
              {/* <span className="avatar">
                <Avatar>S</Avatar>
              </span> */}
              <img src="https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={45} height={45} />
              <div className="username__info">
                <span className='username'>Devi_02</span>
                <span className="relation">started following you. 11w</span>
              </div>
            </div>
            
            <button className='flbtn'>Follow</button>
          </div>
        </div>
        </div>
  )
}

export default Notifications