import Link from 'next/link';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
    const images = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    return (
        <footer className='bg-dark text-white py-5'>
            <div className='container'>
                <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <Link href="#home">
                            <img style={{ width: '100px' }} className='img-fluid' src="assets/logo.png" alt="" />
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sunt doloribus mollitia optio non, similique, fugit obcaecati unde ipsa neque rerum tenetur libero?</p>
                    </div>
                    <div className="col">
                        <h4 className='fw-bold'>Latest news</h4>
                        <div>
                            <p><Link href="#">Lorem ipsum dolor sit amet.</Link></p>
                            <p><Link href="#">Lorem ipsum dolor sit amet.</Link></p>
                            <p><Link href="#">Lorem ipsum dolor sit amet.</Link></p>
                            <p><Link href="#">Lorem ipsum dolor sit amet.</Link></p>
                            <p><Link href="#">Lorem ipsum dolor sit amet.</Link></p>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className='fw-bold'>Gallery</h4>
                        <div className="row row-cols-3 g-2">
                            {
                                images.map(image => (
                                    <div className='col'>
                                        <img className='w-100' src="assets/images/bg-3.jpg" alt="" />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="col">
                        <h4 className='fw-bold'>Contact us</h4>
                        <div>
                            <p>please subscribe</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="example@gmail.com" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-primary" type="button" id="button-addon2">subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;