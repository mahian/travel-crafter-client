import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="">
                            <h2 className="fs-6">About Travel crafter</h2>
                            <h3 className="fw-bold">World Best Travel Agency Company Since 2008.</h3>
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
                        <button className='primary-btn rounded-0 mt-3'>Find Tour</button>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <h3 className="fs-6">Our Values</h3>
                        <p>Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.</p>

                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item className='accordion_item px-0' eventKey="0">
                                <Accordion.Header className='accordion_header'>What makes Travel Crafter different from other travel agencies?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    At Travel Crafter, we believe that travel is not just about visiting new places, but about creating unique and unforgettable experiences. We take the time to get to know our clients and their preferences to craft personalized travel itineraries that meet their needs and exceed their expectations.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you offer travel insurance?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, we offer travel insurance to protect our clients' investments and provide peace of mind during their travels.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Can you help me plan a honeymoon?</Accordion.Header>
                                <Accordion.Body>
                                    Absolutely! We specialize in creating romantic and unforgettable honeymoon experiences for couples, and we can tailor the itinerary to suit your preferences and budget.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Do you offer any discounts or promotions?</Accordion.Header>
                                <Accordion.Body>
                                    We occasionally offer discounts and promotions to our clients, especially during off-season travel periods or for group bookings. Please contact us to find out about any current offers.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;