import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'

const Navbar2 = () => {
    return (
        <>
            <div className='hero'>
                <Navbar expand="lg" className="w-100 d-flex align-items-center justify-content-center">
                    <Container>
                        <Navbar.Brand href="#home" className='logo'>Elegant Furnitures</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto navz">
                                <Nav.Link href="#home" style={{ color: '#EEF9F1' }}>Home</Nav.Link>
                                <Nav.Link href="#about-us" className='special'>About Us</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#cart">
                                    <svg width="40" height="40" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.2825 4.55H14.693C15.7265 4.55 16.4728 5.5025 16.1893 6.461L14.9487 10.661C14.7575 11.306 14.147 11.75 13.4525 11.75H6.584C5.88875 11.75 5.2775 11.3053 5.087 10.661L3.2825 4.55ZM3.2825 4.55L2.75 2.75M12.875 16.25C13.1734 16.25 13.4595 16.1315 13.6705 15.9205C13.8815 15.7095 14 15.4234 14 15.125C14 14.8266 13.8815 14.5405 13.6705 14.3295C13.4595 14.1185 13.1734 14 12.875 14C12.5766 14 12.2905 14.1185 12.0795 14.3295C11.8685 14.5405 11.75 14.8266 11.75 15.125C11.75 15.4234 11.8685 15.7095 12.0795 15.9205C12.2905 16.1315 12.5766 16.25 12.875 16.25ZM6.875 16.25C7.17337 16.25 7.45952 16.1315 7.6705 15.9205C7.88147 15.7095 8 15.4234 8 15.125C8 14.8266 7.88147 14.5405 7.6705 14.3295C7.45952 14.1185 7.17337 14 6.875 14C6.57663 14 6.29048 14.1185 6.0795 14.3295C5.86853 14.5405 5.75 14.8266 5.75 15.125C5.75 15.4234 5.86853 15.7095 6.0795 15.9205C6.29048 16.1315 6.57663 16.25 6.875 16.25Z" stroke="#254D4D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                            <svg width="40" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 10.5C14.2091 10.5 16 8.70914 16 6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5C8 8.70914 9.79086 10.5 12 10.5Z" stroke="#254D4D" stroke-width="1.5" />
                                <path d="M20 18C20 20.485 20 22.5 12 22.5C4 22.5 4 20.485 4 18C4 15.515 7.582 13.5 12 13.5C16.418 13.5 20 15.515 20 18Z" stroke="#254D4D" stroke-width="1.5" />
                            </svg>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Navbar2
