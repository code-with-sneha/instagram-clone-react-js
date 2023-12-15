import React, { useState } from 'react';
import './Sidenav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { loginUser, logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import More from '../components/More';

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loginUser());
    signOut(auth);
  };

  return (
    <div className='sidenav d-sm-none d-md-inline-flex d-xs-none d-lg-inline-flex'>
      <img className='sidenav__logo d-sm-none d-md-none d-lg-block' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="myimg" />
      <img src="https://logosave.com/images/large/common/05/new-instagram-icon-vector--black-.jpg" alt="log" className='logo_icon d-sm-block d-lg-none d-md-block d-xl-none d-md-block' width={35} height={35} />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <HomeIcon />{" "}
            <span className='d-none d-lg-inline-flex'>Home</span>
          </Link>
        </button>
        <button className="sidenav__button">
          <Link to='/Search' style={{ textDecoration: 'none', color: 'black' }}>
          <SearchIcon />{" "}
            <span className='d-none d-lg-inline-flex'>Search</span>
            </Link>
        </button>
        <button className="sidenav__button">
          <Link to='/Explore' style={{ textDecoration: 'none', color: 'black' }}>
          <ExploreIcon />{" "}
            <span className='d-none d-lg-inline-flex'>Explore</span>
          </Link>
        </button>
        <button className="sidenav__button">
        <Link to='/Reels' style={{ textDecoration: 'none', color: 'black' }}>
          <SlideshowIcon />{" "}
            <span className='d-none d-lg-inline-flex'>Reels</span></Link>
        </button>
        <button className="sidenav__button">
        <Link to='/Messages' style={{ textDecoration: 'none', color: 'black' }}>
          <ChatIcon />{" "}
            <span className='d-none d-lg-inline-flex'>Messages</span></Link>
        </button>
        <button className="sidenav__button">
        <Link to='/Notifications' style={{ textDecoration: 'none', color: 'black' }}>
          <FavoriteBorderIcon />{" "}
            <span className='d-none d-lg-inline-flex'>Notifications</span></Link>
        </button>
        <button className="sidenav__button">
        <Link to='/Create' style={{ textDecoration: 'none', color: 'black' }}>
          <AddCircleOutlineIcon />{" "}
            <span className='d-none d-lg-inline-flex'>Create</span></Link>
        </button>
        <button className="sidenav__button">
        <Link to='/Profile' style={{ textDecoration: 'none', color: 'black' }}>
        <div className="profile--image">
            <div className="image">
          <img className='img-m ms-0' src="https://images.pexels.com/photos/10176997/pexels-photo-10176997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" width={35} height={35} />
            <span className='ms-5 d-flex align-items-center profile_m'>
              <p className='d-none d-lg-inline-flex'>Profile</p></span>
            </div>  
          </div></Link>
        </button>
        
        {/* <div className="profile--image">
            <div className="image">
              <img src="https://images.pexels.com/photos/10176997/pexels-photo-10176997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" width={35} height={35} />
            </div>
            <span className='profile__image d-none d-lg-inline-flex d-flex'>Profile</span>  
         </div>  
      </div> */}
      <div className="sidenav__more">
        <button className="sidenav__button">
        <Link to='/More' style={{ textDecoration: 'none', color: 'black' }}>
          <MenuIcon />{" "}
            <span className="sidenav__buttonText d-none d-lg-inline-flex">More</span></Link>
         </button>
        </div>
        {/* <button className="sidenav__button"> */}
          {/* <Avatar>{user.username ? user.username.charAt(0).toUpperCase() : "S"}</Avatar> */}
            <span  className='d-none d-lg-inline-flex'>{user.username}{" "}
            <button onClick={handleLogout} className="logout__button">
              Log out
            </button>
            </span>
        {/* </button> */}
  
    </div>
    </div>
  )
}

export default Sidenav