import React from 'react'
import Avatar from './Avatar';
import './Carousel.css';
import { statusCarousel } from '../data';

const Carousel = () => {
    const handleSlide = (direction)=>{
        const slider = document.getElementsByClassName('carousel-body')[0];
        if (direction === "left")
            slider.scrollBy(-400, 0);
        else 
            slider.scrollBy(400,0);
    }

    return (
        <section className='check'>
            <div className='arrow-btn left-icon' onClick={()=>handleSlide('left')}>
                <img src="https://icons.veryicon.com/png/256/system/alibaba-cloud-console-official-icon-library/angle-left-8.png" alt="left-angle" />
            </div>
            <div className='arrow-btn right-icon' onClick={()=>handleSlide('right')} >
                <img src="https://icons.veryicon.com/png/256/system/alibaba-cloud-console-official-icon-library/angle-right-8.png" alt="left-angle" />
            </div>
            <div className="carousel-body">
                {
                    statusCarousel.map((item)=>{
                        return <Avatar key={item} image={item} />
                    })
                }
            </div>
        </section>
    )
}

export default Carousel