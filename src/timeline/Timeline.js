import React, { useState } from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Post from './posts/Post';
import Carousel from './Carousel';


function Timeline() {
  const [posts,setPosts]=useState([
    {
      user: 'sneha_01',
      postImage: 'https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 11,
      timestamp: '20min',
    },
    {
      user: 'random_11',
      postImage: 'https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: 23,
      timestamp: '2d',
    },
    {
      user: 'photography_00',
      postImage: 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 31,
      timestamp: '20h',
    },
    {
      user: 'rainbow_07',
      postImage: 'https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: 27,
      timestamp: '3d',
    },
  ]);
  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__posts">
              <section className='carousel-status'>
            <Carousel />
          </section>
          
          {posts.map(post => (
            <Post
            user={post.user} 
            postImage={post.postImage}
            likes={post.likes} 
            timestamp={post.timestamp} />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline