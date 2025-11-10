import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: 'var(--secondary-black)' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="futuristic-title h1 mb-3">
              SOBRE <span style={{ color: 'var(--accent-red)' }}>MÍ</span>
            </h2>
            <div 
              className="glow-border" 
              style={{ 
                height: '2px', 
                width: '100px', 
                margin: '0 auto', 
                backgroundColor: 'var(--accent-red)' 
              }}
            ></div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 bg-dark text-light glow-border hover-glow">
              <Card.Body className="text-center">
                <FaUser 
                  style={{ 
                    fontSize: '50px', 
                    color: 'var(--accent-red)', 
                    marginBottom: '20px' 
                  }} 
                />
                <Card.Title className="futuristic-title">PERFIL</Card.Title>
                <Card.Text className="futuristic-text">
                  Desarrollador apasionado por la tecnología y la innovación. 
                  Especializado en crear soluciones digitales que marcan la diferencia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light glow-border hover-glow">
              <Card.Body className="text-center">
                <FaLightbulb 
                  style={{ 
                    fontSize: '50px', 
                    color: 'var(--accent-red)', 
                    marginBottom: '20px' 
                  }} 
                />
                <Card.Title className="futuristic-title">VISIÓN</Card.Title>
                <Card.Text className="futuristic-text">
                  Crear experiencias digitales que fusionen el diseño futurista 
                  con la funcionalidad más avanzada.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 bg-dark text-light glow-border hover-glow">
              <Card.Body className="text-center">
                <FaRocket 
                  style={{ 
                    fontSize: '50px', 
                    color: 'var(--accent-red)', 
                    marginBottom: '20px' 
                  }} 
                />
                <Card.Title className="futuristic-title">OBJETIVO</Card.Title>
                <Card.Text className="futuristic-text">
                  Desarrollar aplicaciones de alto rendimiento que superen 
                  las expectativas de los usuarios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;