import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Importa il file CSS

const About = () => {
  return (
    <Container className="about-container">
      <h1>About Drone Central</h1>
      <p>Welcome to Drone Central! Our mission is to provide a comprehensive and convenient collection of all drones, categorized into multirotors, fixed-wing, and more. This allows you to easily find the drone that suits your needs.</p>
      <p>Each drone has its dedicated page, listing essential information such as the manufacturer's website, direct links to technical specifications, and details about various software that can be used for flight programming, including applications for tasks like photogrammetry.</p>
      <p>We also offer a reviews and Q&A section where the community of pilots can share their experiences, ask questions, and support each other. Join us in building a supportive network of drone enthusiasts!</p>
    </Container>
  );
};

export default About;
