import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTerminal, FaDownload } from 'react-icons/fa';
import '../Styles/css.css'; // ← Ruta corregida

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-vh-100 min-vw-100 d-flex align-items-center particle-bg"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <Container>
        <Row className="subir shift-left align-items-center">
          <Col md={7}>
            <div className="floating">
              <FaTerminal style={{ fontSize: '80px', color: 'var(--accent-red)' }} />
            </div>
            <h1 className="futuristic-title display-3 mt-4 neon-glow">
              HOLA, SOY <span style={{ color: 'var(--accent-white)' }}>Luis Eduardo</span>
            </h1>
            <h2 className="futuristic-text h3 mt-3 text-light">
              DESARROLLADOR <span style={{ color: 'var(--accent-red)' }}>DevSecOps</span>
            </h2>
            <p className="futuristic-text lead mt-4 mb-5 text-light">
              Creando el futuro con código innovador y soluciones tecnológicas avanzadas
            </p>
            <div className="mt-5">

            <a href="https://wa.me/573007472039" >
              {/* Botón de contacto */}
              <Button 
                variant="danger" 
                size="lg" 
                className="futuristic-text mx-2 neon-glow"
                >
                CONTÁCTAME
              </Button>
                  </a>
            </div>
          </Col>
          <Col md={5} className="text-center d-none d-md-block">
            
            <div className="hero-image-wrap">
              <img src="foto.jpeg" alt="Foto Luis Eduardo" className="hero-avatar" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;