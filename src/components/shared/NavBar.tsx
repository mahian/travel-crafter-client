import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Link href="/">
                    <Navbar.Brand style={{ width: '300px' }} href="#home">
                        <img className='img-fluid w-100' src="/assets/logo.png" alt="" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='mx-auto'></div>
                    <Nav>
                        <Nav.Link href="/" className='fw-semibold'> <span><i className="fa-solid fa-house"></i></span> Home</Nav.Link>
                        <Nav.Link href="#services" className='fw-semibold'> <span><i className="fa-solid fa-person-digging"></i></span> Services</Nav.Link>
                        <Nav.Link href="#package" className='fw-semibold'> <span><i className="fa-solid fa-cube"></i></span> Package</Nav.Link>
                        <Nav.Link href="#blog" className='fw-semibold'> <span><i className="fa-solid fa-blog"></i></span> Blog</Nav.Link>
                        <Nav.Link href="contact-us" className='fw-semibold'> <span><i className="fa-solid fa-user-group"></i></span> Contact us</Nav.Link>
                    </Nav>
                    <div className='mx-auto'></div>
                    <Nav.Link href="#package"><button className='nav-btn me-2'>Get Started</button></Nav.Link>
                    <Link href="register"><button className='nav-btn me-2'>Sign up</button></Link>
                    <Link href="register"><button className='nav-btn'>Log out</button></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;