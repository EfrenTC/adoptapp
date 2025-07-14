
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.css';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
const Slider = () => {
 const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=9');
        const result = await response.json();
        setCats(result);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="cat-coverflow">
      <h1 className='cat-coverflow__title'>¡Conoce a tu futuro amichi!</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 2500,         
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="cat-coverflow__swiper"
      >
        {cats.map((cat) => (
          <SwiperSlide key={cat.id} className="cat-coverflow__slide">
            <img className="cat-coverflow__image" src={cat.url} alt="Cat" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="/adopcion" className="cat__slider-button">Ver todos los gatitos</Link>
    </div>
  );
}

export default Slider
