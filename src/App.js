import './App.css';
import Authentication from './authentication/Authentication';
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { auth } from './firebase';
import {loginUser, setLoading} from './features/userSlice';
 import Home from './components/Home';
import SearchSidebar from './components/SearchSidebar';
import Explore from './components/Explore';
import { Routes, Route } from 'react-router-dom';
import Reels from './components/Reels';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import Create from './components/Create';
import More from './components/More';
import Signup from './authentication/Signup';
import Sidenav from './timeline/Sidenav';
import Login from './authentication/Login';
import Profile from './components/Profile';


function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(loginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        })
        );
        dispatch(setLoading(false));
      }else{
        dispatch(setLoading(false));
        console.log('User is not logged in');
      }
    });
  },[]);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  console.log(auth.currentUser);
  
  return (
    <div className="app">
      {isLoading ? (<div className="loader-container">
      <div className="loader"></div>
      </div>) : (<>{user ? <Home /> : <Authentication />} </>)}
      <div>
        </div>
      <div>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/Home' index  element={<Home />}/> 
        <Route path="/sidenav" element={<Sidenav />}/>
        <Route path="/search" element={<SearchSidebar />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/reels" element={<Reels />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/more" element={<More />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
