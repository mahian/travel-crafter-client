import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <>
            <div className=''>
                <div className="container">
                    <div className='header-main'>
                        <div className='bg-dark h-100 d-flex justify-content-center'>
                            <div className="row">
                                <div className="col-md-6 d-flex flex-column justify-content-center p-5">
                                    <h1 className="header-info">Adventure Begins Here</h1>
                                    <p className='text-light'>No matter who you’re looking to travel with, you can depend on our 2,500 trusted operators to make sure everything’s taken care of.</p>
                                    <div className='mt-3'>
                                        <button className="primary-btn me-3"><i className="fa-solid fa-circle-info"></i> Learn More</button>
                                        <button className="white-btn"><i className="fab fa-apple"></i> Book now</button>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&w=1000&q=80" className="" width="300" alt="iPhone Image" />
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