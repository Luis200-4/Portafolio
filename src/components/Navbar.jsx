import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaCode } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top"
      className="glow-border"
      style={{ backgroundColor: 'var(--secondary-black) !important' }}
    >
      <Container>
        <Navbar.Brand href="#home" className="futuristic-title">
          <FaCode style={{ color: 'var(--accent-red)', marginRight: '10px' }} />
          Luis DevSecOps
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto futuristic-text">
            <Nav.Link href="#home" className="text-light mx-2">INICIO</Nav.Link>
            <Nav.Link href="#about" className="text-light mx-2">SOBRE MÍ</Nav.Link>
            <Nav.Link href="#skills" className="text-light mx-2">HABILIDADES</Nav.Link>
            <Nav.Link href="#projects" className="text-light mx-2">PROYECTOS</Nav.Link>
            <Nav.Link href="#contact" className="text-light mx-2">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;