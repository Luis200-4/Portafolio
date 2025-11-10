import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const validateEmail = (e) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor completa todos los campos.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Introduce un correo válido.');
      return;
    }

    // Usamos mailto como fallback simple (sin backend). También mostramos un mensaje de éxito.
    const subject = encodeURIComponent(`Contacto desde portafolio - ${name}`);
    const body = encodeURIComponent(`${message}\n\n--\n${name} | ${email}`);
    const mailto = `mailto:youremail@example.com?subject=${subject}&body=${body}`;

    // Abrir cliente de correo del usuario
    window.location.href = mailto;

    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="futuristic-title h1 mb-2">CONTÁCTAME</h2>
            <p className="futuristic-text text-muted">¿Tienes un proyecto o una idea? Hablemos — disponibilidad para colaboraciones y consultoría.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-card p-0 bg-dark text-light glow-border">
              <div className="row g-0 align-items-center">
                <div className="col-md-4 d-none d-md-flex justify-content-center p-4">
                  {/* Left photo for contact (place at public/contact-avatar.png) */}
                  <img src="foto.jpeg" alt="Foto de contacto" className="contact-left-avatar" />
                </div>
                <div className="col-12 col-md-8 p-4">
                  {error && <Alert variant="danger">{error}</Alert>}
                  {sent && <Alert variant="success">¡Gracias! Se abrió tu cliente de correo para enviar el mensaje.</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label className="futuristic-text">Nombre</Form.Label>
                      <Form.Control className="contact-input text-white" type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label className="futuristic-text">Correo</Form.Label>
                      <Form.Control className="contact-input" type="email" placeholder="tu@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactMessage">
                      <Form.Label className="futuristic-text">Mensaje</Form.Label>
                      <Form.Control className="contact-input" as="textarea" rows={5} placeholder="Cuéntame sobre tu proyecto..." value={message} onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="futuristic-text text-muted small">También puedes escribirme a <a href="mailto:youremail@example.com" className="text-decoration-none">Le.nino07@ciaf.edu.co</a></div>
                      <Button type="submit" variant="danger" className="send-btn futuristic-text">
                        <FaPaperPlane className="me-2" /> Enviar
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
