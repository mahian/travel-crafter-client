import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';

const Features = () => {
    const slideItems = [
        {
            title: 'London',
            subTitle: 'Great Britain',
            desc: '12 Popular places',
            image: 'https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Bali',
            subTitle: 'Indonesia',
            desc: '10 Popular places',
            image: 'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'London',
            subTitle: 'Great Britain',
            desc: '12 Popular places',
            image: 'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'London',
            subTitle: 'Great Britain',
            desc: '12 Popular places',
            image: 'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]
    return (
        <>
            <section id='features' className='container'>
                <div className="header">
                    <span>top cities</span>
                    <h1>Our popular cities</h1>
                    <p>We are a team of humans with the strategy, tools, and solutions and digital products.</p>

                </div>
                <Swiper navigation={true} slidesPerView={3} spaceBetween={30} modules={[Navigation]} className="mySwiper">
                    {
                        slideItems.map(item => <SwiperSlide className="item">
                            <img src={item.image} alt="" />
                            <div className="overlay">
                                <span>Great Britain</span>
                                <div>
                                    <h2>London</h2>
                                    <p>12 Popular places</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </section>
        </>
    );
};

export default Features;