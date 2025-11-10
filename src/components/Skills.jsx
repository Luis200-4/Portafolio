import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'Hacking Etico', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Bootstrap', level: 95 },
    { name: 'MongoDB', level: 70 }
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="futuristic-title h1 mb-3">
              MIS <span style={{ color: 'var(--accent-red)' }}>HABILIDADES</span>
            </h2>
            <div className="glow-border" style={{ height: '2px', width: '100px', margin: '0 auto', backgroundColor: 'var(--accent-red)' }}></div>
          </Col>
        </Row>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="mb-4">
              <div className="skill-item">
                <div className="d-flex justify-content-between mb-2">
                  <span className="futuristic-text text-light">{skill.name}</span>
                  <span className="futuristic-text" style={{ color: 'var(--accent-red)' }}>{skill.level}%</span>
                </div>
                <ProgressBar 
                  now={skill.level} 
                  style={{ 
                    height: '8px',
                    backgroundColor: 'var(--secondary-black)'
                  }}
                  className="glow-border"
                >
                  <ProgressBar 
                    now={skill.level} 
                    style={{ 
                      backgroundColor: 'var(--accent-red)',
                      boxShadow: '0 0 10px var(--accent-red-glow)'
                    }} 
                  />
                </ProgressBar>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;