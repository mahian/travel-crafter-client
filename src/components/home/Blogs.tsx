import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    const blogs = [
        {},
        {},
        {},
        {},
    ]
    return (
        <section className=' py-5 bg-light'>
            <div className='container'>
                <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    {
                        blogs.map(data => (
                            <div className="col">
                                <Link className='text-black text-decoration-none' href="">
                                    <Card className='w-100 border-0'>
                                        <div className='position-relative'>
                                            <Card.Img variant="top" src="assets/images/bg-1.jpeg" />
                                            <div className='position-absolute top-0 left-0 text-white p-2'>
                                                <span className='me-2'><i className="fa-sharp fa-solid fa-calendar-days"></i></span>
                                                <span>March 12, 2023</span>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <h2 className='fs-3 fw-bold'>Card Title</h2>
                                            <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                        </Card.Body>
                                        <Card.Body>
                                            <div className='text-secondary'>
                                                <span className='me-2'><i className="fa-sharp fa-solid fa-comment"></i></span>
                                                <span>3 Comments</span>
                                            </div>
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

export default Blogs;