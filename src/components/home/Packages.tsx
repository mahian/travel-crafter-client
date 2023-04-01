import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';
import SectionTitle from '../utility/SectionTitle';

const Packages = () => {
    const services = [
        {},
        {},
        {},
    ]
    return (
        <section className='py-5' id='package'>
            <div className='container'>
                <SectionTitle>
                    <h2>our packages</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis impedit eos laudantium ex facere.</p>
                </SectionTitle>
                <div className="row row-cols-1 row-cols-lg-3">
                    {
                        services.map(data => (
                            <div className="col">
                                <Link className='text-black text-decoration-none' href="serviceDetails/123">
                                    <Card className='w-100 border-0 package-card'>
                                        <div className='position-relative'>
                                            <div className='overflow-hidden package-image'>
                                            <Card.Img variant="top" src="assets/images/bg-3.jpg" />
                                            </div>
                                            <div className='position-absolute bottom-0 left-0 text-white p-2'>
                                                <span className='me-2'><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                                                <span>Dhaka bangladesh</span>
                                            </div>
                                        </div>
                                        <Card.Body className='px-0'>
                                            <h2 className='fs-3 fw-bold'>Card Title</h2>
                                            <div className='text-secondary'><span className='colored fs-3 fw-bold'>160$</span>/per person</div>
                                            <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                            <button className='primary-btn sm'>Book now</button>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Packages;