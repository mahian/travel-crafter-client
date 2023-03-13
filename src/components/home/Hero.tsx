import Link from 'next/link';
import React from 'react';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
        <>
            <div className='min-vh-100 w-100 d-flex flex-col align-items-center justify-content-center' style={{
                backgroundImage: 'linear-gradient(to bottom, #00000030, #00000030), url(assets/images/bg-3.jpg)',
                objectFit: 'cover',
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover'
            }}>
                <div className="container">
                    <div className="row flex-col align-items-center justify-content-center">
                        <div className="col-md-12 text-center">
                            <h1 className="fw-bold text-white uppercase" style={{ fontSize: '52px' }}>17 Years of excellence in</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maxime incidunt fugit, optio distinctio quo.</p>
                            <div className='mt-5'>
                                <Link href="" className="primary-btn rounded-0">Our Services</Link>
                                <Link href="" className="bordered-btn rounded-0 ms-3">Contact Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className='container d-md-flex search-form'>
                <div className="input-group py-3">
                    <span className="input-group-text bg-transparent border-0" id="basic-addon1">@</span>
                    <input type="text" className="form-control border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group py-3 border-start">
                    <span className="input-group-text bg-transparent border-0" id="basic-addon1">@</span>
                    <input type="text" className="form-control border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group py-3 border-start">
                    <span className="input-group-text bg-transparent border-0" id="basic-addon1">@</span>
                    <input type="text" className="form-control border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button type="submit" className="btn btn-primary rounded-0 px-5">Submit</button>
            </form>
        </>
    );
};

export default Hero;