import React from 'react'
import './Home.css';
import Sidenav from '../timeline/Sidenav';
import Timeline from '../timeline/Timeline';
function Home() {
  return (
    <div className='homepage'>
      <div className="homepage__nav">
        <Sidenav />
      </div>
        <div className="homepage__timeLine">
          <Timeline />
      </div>
      </div>
  )
}

export default Home