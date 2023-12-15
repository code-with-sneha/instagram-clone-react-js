import React from 'react';
import '../components/Messages.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
function Messages() {
  return (
    <div className='app'>
    <div className='back'>
    <h3 className='name_s'>Sneha</h3> 
    <BorderColorIcon className='icon-1' />
    <div className="msg">
      <h6 className='tit'>Messages</h6>
      <p className='req'>Requests</p>
      <div className="suggestions__usernames">
          <div className="suguser">
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
            
            
          </div>

          <div className="suguser">
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
            
            
          </div>
          <div className="suguser">
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
            
           
          </div>
          <div className="suguser">
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
            
           
          </div>
          <div className="suguser">
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
          </div>
        </div>
    </div>
    <div>
            <img className='ilogo' src="https://th.bing.com/th/id/OIP.EZxUWq0_uSRx1FnL2j48YgAAAA?rs=1&pid=ImgDetMain" alt="logo" height={90} width={90} />
            <h5 className='iconmg'>Your messages</h5>
            <p className='iconp'>Send private photos and messages to a friend or group</p>
            <button className='ibtn'>Send message</button>
          </div>
    </div>
          
      </div> 
  
  )
}

export default Messages