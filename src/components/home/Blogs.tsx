import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@tanstack/react-query';

const Blogs = () => {
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            return data;
        }
    });
    return (
        <section className=' py-5 bg-light'>
            <div className='container'>
                <div className='position-relative main-post'>
                    <div className='overflow-hidden'>
                    <img className='img-fluid w-100' src="assets/images/bg-2.jpg" alt="" />
                    </div>
                    <div className='content w-100'>
                        <h2 className='fs-2 fw-bold'>Card Title</h2>
                        <div className='text-light'>
                            <span className='me-2'><i className="fa-sharp fa-solid fa-calendar-days"></i></span>
                            <span>March 12, 2023</span>
                        </div>
                        <p className='mt-2'>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className='position-absolute top-0 p-3'>
                        <span className='category-name travel'>travel</span>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {
                        blogs.map((blog: any) => (
                            <div className="col">
                                <Link className='text-black text-decoration-none' href="post-details/123">
                                    <Card className='blog-card w-100 border-0 rounded-0 bg-transparent position-relative'>
                                        <div className='overflow-hidden'>
                                            <Card.Img variant="top" className='rounded-0' src={blog.imageUrl} />
                                        </div>
                                        <Card.Body className='p-0'>
                                            <div className='position-absolute top-0 p-2'>
                                                <span className='category-name travel'>travel</span>
                                            </div>
                                            <h2 className='fs-3 fw-bold mt-3'>{blog.title}</h2>
                                            <p>{blog.content}</p>
                                            <div className='d-flex justify-content-between'>
                                                <div className='text-secondary'>
                                                    <span className='me-2'><i className="fa-sharp fa-solid fa-calendar-days"></i></span>
                                                    <span>{blog.date}</span>
                                                </div>
                                                <div className='text-secondary'>
                                                    <span className='me-2'><i className="fa-sharp fa-solid fa-comment"></i></span>
                                                    <span>3 Comments</span>
                                                </div>
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