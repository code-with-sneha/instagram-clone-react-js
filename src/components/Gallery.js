import React, { useState } from 'react'
import '../components/Explore.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
const Gallery = () => {
  let data=[
    {
      id:1,
      imgSrc:'https://images.pexels.com/photos/1753121/pexels-photo-1753121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id:2,
      imgSrc:'https://images.pexels.com/photos/1656687/pexels-photo-1656687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id:3,
      imgSrc:'https://images.pexels.com/photos/1736222/pexels-photo-1736222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id:4,
      imgSrc:'https://images.pexels.com/photos/597049/paris-france-eiffel-tower-597049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id:5,
      imgSrc:'https://images.pexels.com/photos/355829/pexels-photo-355829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id:6,
      imgSrc:'https://images.pexels.com/photos/919237/pexels-photo-919237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id:7,
      imgSrc:'https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
  ]
  const [model,setModel]=useState(false);
  const [tempimgSrc,setTempImgSrc]=useState('');
  const getImg=(imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <>
    <div className={model?"model open" : "model"}>
      <img src={tempimgSrc} />
    </div>
    <div className='gallery'>
      {data.map((item, index)=>{
        return(
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width: '100%'}} />
              <FavoriteBorderIcon className='favr' /><p className='like'>33k</p> 
              <CommentIcon className='comt'/><p className='comt1'>39</p>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Gallery