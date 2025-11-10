import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/*
 Interactive Projects section:
 - filter by technology
 - click a card to open a modal with details
 - soft hover and subtle transform to match site design
*/

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de E-commerce",
      description: "Plataforma de comercio electrónico moderna y responsive.",
      technologies: ["React", "Javascript", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "App de Tareas",
      description: "Aplicación para gestión de proyectos con colaboración en tiempo real.",
      technologies: ["React", "Firebase"],
      github: "#",
      demo: "#"
    },

     {
      id: 3,
      title: "Universo Del Campo",
      description: "Plataforma ganadera",
      technologies: ["React", "Django","PostgreSQL","Bootstrap"],
      github: "#",
      demo: "#"
    },

      {
      id: 4,
      title: "Plataforma  De Inventarios",
      description: "Control inventario",
      technologies: ["React", "Django","PostgreSQL","Bootstrap"],
      github: "#",
      demo: "#"
    }


  ];

  const [activeTech, setActiveTech] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const allTech = Array.from(new Set(projects.flatMap(p => p.technologies)));

  const filtered = activeTech === 'All' ? projects : projects.filter(p => p.technologies.includes(activeTech));

  const open = (proj) => { setSelected(proj); setShowModal(true); };
  const close = () => { setSelected(null); setShowModal(false); };

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'var(--secondary-black)' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="futuristic-title h1 mb-3">
              MIS <span style={{ color: 'var(--accent-red)' }}>PROYECTOS</span>
            </h2>
            <div className="glow-border" style={{ height: '2px', width: '100px', margin: '0 auto', backgroundColor: 'var(--accent-red)' }}></div>
          </Col>
        </Row>
        <Row className="mb-4 justify-content-center project-filter">
          <Col xs="auto">
            <Button variant={activeTech === 'All' ? 'danger' : 'outline-light'} size="sm" onClick={() => setActiveTech('All')} className="me-2 futuristic-text">Todos</Button>
          </Col>
          {allTech.map((tech) => (
            <Col xs="auto" key={tech}>
              <Button variant={activeTech === tech ? 'danger' : 'outline-light'} size="sm" onClick={() => setActiveTech(tech)} className="me-2 futuristic-text">{tech}</Button>
            </Col>
          ))}
        </Row>
        <Row className="g-4">
          {filtered.map((project) => (
            <Col md={6} key={project.id}>
              <Card className="h-100 bg-dark text-light glow-border hover-glow project-card" onClick={() => open(project)} role="button">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="futuristic-title mb-3">{project.title}</Card.Title>
                  <Card.Text className="futuristic-text flex-grow-1">{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge bg="danger" key={index} className="me-1 mb-1 futuristic-text" style={{ backgroundColor: 'var(--accent-red)' }}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    <Button variant="outline-light" size="sm" className="futuristic-text flex-grow-1 glow-border" onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}>
                      <FaGithub className="me-1" /> Código
                    </Button>
                    <Button variant="danger" size="sm" className="futuristic-text flex-grow-1 neon-glow" onClick={(e) => { e.stopPropagation(); window.open(project.demo, '_blank'); }}>
                      <FaExternalLinkAlt className="me-1" /> Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for project details */}
      <Modal show={showModal} onHide={close} centered>
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title className="futuristic-title">{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light futuristic-text">
          <p>{selected?.description}</p>
          <div className="mb-3">
            {selected?.technologies?.map((t, i) => <Badge bg="danger" key={i} className="me-1">{t}</Badge>)}
          </div>
          <p>Detalles adicionales, capturas y descripción técnica aquí. Puedes reemplazar esto con contenido real de tu proyecto.</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="outline-light" onClick={() => window.open(selected?.github || '#', '_blank')}>Ver código</Button>
          <Button variant="danger" onClick={() => window.open(selected?.demo || '#', '_blank')}>Ver demo</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Projects;