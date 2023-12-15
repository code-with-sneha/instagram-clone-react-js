import React from 'react';
import '../components/More.css';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { loginUser, logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
function More() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loginUser());
    signOut(auth);
  };
  return (
    <div className=' dropDownProfile'>
      <div className='list'>
        <button>Settings</button>
        <button>Your activity</button>
        <button>Saved</button>
        <button>Switch appearance</button>
        <button>Report a problem</button>
        <button>Threads</button>
        <button>Switch accounts</button>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  )
}

export default More