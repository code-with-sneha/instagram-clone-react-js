import React, { useState } from 'react';
import '../components/SearchSidebar.css';

const SearchSidebar = () =>{
  // const[popup,setPopup]=useState(false);
  // const handleClickOpen=()=>{
  //   setPopup(!popup);
  // }
 
 return (
    <div className="sliding-search-bar d-lg-12 d-sm-6">
      {/* <button onClick={handleClickOpen}>open popup</button> */}
      <div>
        {/* <div className='main'> */}
          <div className='popup'>
            <div className='popup-header'>
              <h3 className='m-1'>Search</h3>
            </div>
            <br />
            <div>
              <input type='text' placeholder='Search                                              x' className='mb-3 color d-lg-12 d-sm-6' />
              <hr />
            <h4 className='d-lg-12 d-sm-6'>Recent</h4>
            <p className='no d-lg-12 d-sm-6'>No Recent Searches.</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
 )
}

export default SearchSidebar