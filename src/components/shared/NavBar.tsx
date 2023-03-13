import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <nav className='w-100 position-absolute'>
            <div className='top-nav py-3'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className=' d-flex align-items-center'>
                        <p>Follow us : </p>
                        <div>
                            <span className=''><i className="fa-brands fa-square-facebook"></i></span>
                            <span><i className="fa-brands fa-square-twitter"></i></span>
                            <span><i className="fa-brands fa-square-instagram"></i></span>
                            <span><i className="fa-brands fa-linkedin"></i></span>
                        </div>
                        <div>
                            <span><i className="fa-solid fa-phone"></i></span>
                            <span>+880 1706-988476</span>
                        </div>
                    </div>
                    <div className=' d-flex'>
                        <div className='d-flex'>
                            <img className='img-fluid' style={{ height: '20px' }} src="assets/images/language/uk.png" alt="" />
                            <select className="border-0 outline-0 focus:outline-0 p-0 bg-transparent" aria-label="Default select example">
                                <option selected>English</option>
                                <option value="বাংলা">বাংলা</option>
                            </select>
                        </div>
                        <span>Login</span>
                    </div>
                </div>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand style={{ width: '100px' }} href="#home">
                        <img className='img-fluid w-100' src="assets/logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className='mx-auto'></div>
                        <Nav>
                            <Nav.Link href="#home active" className='fw-semibold'>Home</Nav.Link>
                            <Nav.Link href="#services" className='fw-semibold'>Services</Nav.Link>
                            <Nav.Link href="#about" className='fw-semibold'>About</Nav.Link>
                            <Nav.Link href="#package" className='fw-semibold'>Package</Nav.Link>
                            <Nav.Link href="#blog" className='fw-semibold'>Blog</Nav.Link>
                            <Nav.Link href="#contact" className='fw-semibold'>Contact us</Nav.Link>
                            <Nav.Link href="#package" className='bordered-btn rounded-pill sm'>Get Started</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavBar;