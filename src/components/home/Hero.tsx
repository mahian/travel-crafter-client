import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <>
            <div
                className='min-vh-100 w-100 d-flex flex-col align-items-center justify-content-center' style={{
                    backgroundImage: 'linear-gradient(to bottom, #00000030, #00000030), url(assets/images/bg-3.jpg)',
                    objectFit: 'cover',
                    backgroundRepeat: 'noRepeat',
                    backgroundSize: 'cover'
                }}>
                <div className="container">
                    <div className="row flex-col align-items-center justify-content-center">
                        <div className="col-md-12 text-center">
                            <div>
                                <h1 className="fw-bold text-white uppercase" style={{ fontSize: '52px' }}>17 Years of excellence in</h1>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maxime incidunt fugit, optio distinctio quo.</p>
                                <div className='mt-5'>
                                    <Link href="" ><button className="primary-btn rounded-0">Our Services</button></Link>
                                    <Link href="" ><button className="white-btn rounded-0 ms-3">Contact Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;