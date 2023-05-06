import React from 'react';

const About = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <img className='img-fluid' src="assets/images/bg-2.jpg" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="">
                                <h4 className="fs-6" style={{color: 'var(--primary-color)'}}>About Travel crafter</h4>
                                <h2 className="fw-bold fs-1 lh-1">World Best Travel Agency Company Since 2008.</h2>
                                <p>Travel Crafter is a global travel agency that provides personalized travel services to help clients create unforgettable travel experiences. Our mission is to craft the perfect trip tailored to your preferences and needs, taking care of all the details so you can focus on enjoying your journey.</p>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <span className='me-3 colored'>
                                        <i className="fa-sharp fa-solid fa-check"></i>
                                    </span>
                                    <h5 >Ratione voluptatem.sequi nesciunt.</h5>
                                </div>
                            </div>
                            <button className='primary-btn mt-3'>Find Tour</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default About;