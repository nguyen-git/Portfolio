import React from 'react'
import './personal.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

const data = [
  {
    avatar: AVT1,
    name: 'Hobbies',
    review: 'Play a game/ Learning/ Traveling/ Listen to music'
  },
  {
    avatar: AVT2,
    name: 'Another Skills',
    review: 'photoshop / editing video / presentation and make powerpoint '
  },
  {
    avatar: AVT3,
    name: 'Character',
    review: 'Sociable / Cheerful / Enthusiastic / inquisitive / ready to learn'
  },
]


const Personal = () => {
  return (
    <section id="personal">
      <h5>Personal Details and Soft Skills</h5>
      <h2>About Me</h2>

      <Swiper className="container personal_container mySwiper"
        rewind={true} 
        navigation={true} 
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={40}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="personal">
            <div className="client_avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Personal