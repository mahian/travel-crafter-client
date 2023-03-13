import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';

const Packages = () => {
    const services = [
        {},
        {},
        {},
    ]
    return (
        <section className='py-5' id='package'>
            <div className='container'>
                <div className="row row-cols-1 row-cols-lg-3">
                    {
                        services.map(data => (
                            <div className="col">
                                <Link className='text-black text-decoration-none' href="">
                                    <Card className='w-100 border-0 rounded-0'>
                                        <div className='position-relative'>
                                            <Card.Img className='rounded-0 package-image' variant="top" src="assets/images/bg-3.jpg" />
                                            <div className='position-absolute bottom-0 left-0 text-white p-2'>
                                                <span className='me-2'><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                                                <span>Dhaka bangladesh</span>
                                            </div>
                                        </div>
                                        <Card.Body className='px-0'>
                                            <h2 className='fs-3 fw-bold'>Card Title</h2>
                                            <div className='text-secondary'><span className='colored fs-3 fw-bold'>160$</span>/per person</div>
                                            <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
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