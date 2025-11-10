import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center mb-3 mb-md-0">
            <div className="futuristic-title">Luis Eduardo</div>
            <div className="futuristic-text small text-white">Desarrollador DevSecOps — Código con propósito</div>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <a href="https://github.com/Luis200-4" className="footer-icon me-3" aria-label="GitHub"><FaGithub /></a>
            <a href="#" className="footer-icon me-3" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="footer-icon me-3" aria-label="Twitter"><FaTwitter /></a>
            <a href="lenino07@ciaf.edu.co" className="footer-icon" aria-label="Email"><FaEnvelope /></a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3 small text-white">© {new Date().getFullYear()} Luis Eduardo — Todos los derechos reservados</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
