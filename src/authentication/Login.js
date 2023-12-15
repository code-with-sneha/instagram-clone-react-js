import React, { useState } from 'react';
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = () => {
      signInWithEmailAndPassword(auth,email,password);
    };
    
  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="insta-logo" />

        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Phone number,username, or email' value={email}  />

        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password} />
        <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login