import React, { useState } from 'react';
import "./Signup.css";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth } from '../firebase';
function Signup() {
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup =() => {
    createUserWithEmailAndPassword(auth,email,password).then(signInWithEmailAndPassword(auth,email,password).then(updateProfile(auth.currentUser, {displayName: username}))
    ).catch(err => {
      alert(err);
    });
  };
  return (
    <div className='signup'>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="insta-logo" />
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Mobile number or email' value={email}/>
        {/* <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Full Name' /> */}
        <input onChange={e => setUsername(e.target.value)} type="text" placeholder='Username' value={username} />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password} />
        <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default Signup