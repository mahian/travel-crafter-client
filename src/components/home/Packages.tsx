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
                            <div className="card shadow-0 border-0 rounded-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 mb-4 mb-lg-0">
                                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                                    className="w-100" />
                                                <a href="#!">
                                                    <div className="hover-overlay">
                                                        <div className="mask" style={{ backgroundColor: '#fdfdfd26' }}></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h2 className='mt-2'>Quant trident shirts</h2>
                                            <div className="d-flex flex-row">
                                                <div style={{ color: '#f9c834' }} className="mb-1 me-2">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <span>310</span>
                                            </div>
                                            <p className="text-truncate mb-4 mb-md-0">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-flex align-items-center mb-1">
                                                <h4 className="me-3">৳ 5000</h4>
                                                <p className="text-gray">per person</p>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <button className="primary-btn btn-sm" type="button">Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Packages;