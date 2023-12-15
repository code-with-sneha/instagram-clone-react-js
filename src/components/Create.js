import React from 'react'
import '../components/Create.css';
function Create() {
  return (
    <div className="app">
    <div className='card_cr'>  
      <h6 className='head'>Create new post</h6><hr />
      <img src="./images/img.png" alt='img' className='logo' />
        <p style={{fontSize: '20px'}}>Drag photos and videos here</p>
        <button className='selbtn'>Select from computer</button>
    </div>
    </div>
  )
}

export default Create