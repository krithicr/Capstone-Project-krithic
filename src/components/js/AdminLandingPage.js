// AdminLandingPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from './Navbar';

const AdminLandingPage = ({ adminName, handleSignOut }) => {
  const handleLogout = () => {
    // Handle logout logic
    handleSignOut();
  };

  return (
    <Container fluid>
      

      {/* Main Content */}
      <Row className="mt-4">
        {/* Jurisdiction Card */}
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Jurisdiction</Card.Title>
              <Card.Text>
                View the list of jurisdictions and manage them.
              </Card.Text>
              <Button as={Link} to="jurisdiction" variant="success">
                Go to Jurisdiction
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add Officer Card */}
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Add Officer</Card.Title>
              <Card.Text>
                Add new officers and manage their details.
              </Card.Text>
              <Button as={Link} to="add-officer" variant="success">
                Add Officer
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Approve Complaints Card */}
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Approve Complaints</Card.Title>
              <Card.Text>
                Review and approve complaints submitted.
              </Card.Text>
              <Button as={Link} to="/approve-complaints" variant="info">
                Approve Complaints
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLandingPage;
