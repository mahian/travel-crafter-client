import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <nav className='w-100 position-absolute top-0' style={{zIndex: 999}}>
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
                            <Nav.Link href="#package"><button className='primary-btn rounded-pill sm'>Get Started</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavBar;