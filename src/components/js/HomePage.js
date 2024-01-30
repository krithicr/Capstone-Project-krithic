// src/components/HomePage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Css/HomePage.css'// Import your custom CSS file

const HomePage = () => {
  return (
    <Container className="custom-container mt-5 bg-color">
      <div className="custom-header">
        <h1 className="display-4">Welcome to [Government Name]</h1>
        <p className="lead">
          Explore our official website to access government services and stay informed about the
          latest updates.
        </p>
        <Link to="/signup"> {/* Use Link component for navigation */}
          <Button variant="primary">Get Started</Button>
        </Link>
      </div>

      <Row className="mt-5">
        <Col>
          <h2>Our Services</h2>
          <p>
            Discover a wide range of government services designed to meet the needs of our citizens.
          </p>
        </Col>
        <Col>
          <h2>Latest News</h2>
          <p>
            Stay up-to-date with the latest news and announcements from [Government Name].
          </p>
        </Col>
        <Col>
          <h2>Contact Us</h2>
          <p>
            Have questions or concerns? Reach out to us through our contact form or call our
            helpline.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
