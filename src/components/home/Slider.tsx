import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
    const slideData = [
        {
            bg: 'assets/images/bg-1.jpeg',
        },
        {
            bg: 'assets/images/bg-2.jpg',
        },
        {
            bg: 'assets/images/bg-3.jpg',
        },
    ]
    return (
        <div className='container'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    // clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src="assets/images/bg-2.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/bg-3.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/bg-2.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/bg-3.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/bg-2.jpg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/bg-3.jpg" alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controller">
                    <div className="swiper-button-prev slider-arrow">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>


        </div>
    );
};

export default Slider;