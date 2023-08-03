import Navbar from '../../components/Navbar'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

import './Home.css'

export const Home = ({isAuth, setIsAuth}) => {
  
  return (
    <div className='home-container'>
        <div className='home-head'>
            <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        </div>

        <div className='home-body'>
          <h1 className='home-body-heading bold'>Hello & welcome to Gather!</h1>
          <div className='home-body-container'>
              <div className='welcome'>
                <div className='welcome-text1'>
                    <p>Here, you can create and join community groups to interact with people who share similar interests.</p>
                    <p>Enjoy connecting with like-minded individuals and exploring your passions. Have a great time on Gather! 🌟🎉</p>
                </div>
                <div className='welcome-text2'>
                    <span className='bold'>Start </span>your journey by heading over to the chat section. Let's begin this exciting adventure together! 🚀🌈
                </div>
              </div>

              <div className='swiper-container'>
                  <div className='swiper' >
                      <Swiper
                        direction='vertical'
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 1500,
                          disableOnInteraction: false,
                        }}
                        loop='true'
                        pagination={{ clickable: false }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                      >
                          <SwiperSlide>Explore Communities</SwiperSlide>
                          <SwiperSlide>Create Your Own Community</SwiperSlide>
                          <SwiperSlide>Engage and Interact</SwiperSlide>
                          <SwiperSlide>Respectful Interaction</SwiperSlide>
                          <SwiperSlide>Have Fun!</SwiperSlide>   
                      </Swiper>
                  </div>
              </div>
          </div>

        </div>
    </div>
  )
}
export default Home