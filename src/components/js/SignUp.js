// SignUp.js
import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPersonPlus } from 'react-icons/bs';
import '../Css/SignUp.css'

const SignUp = ({ onSignUp }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSignUp({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    });
    };
   
  return (
    <Container fluid className="d-flex align-items-center min-vh-100 bg-color">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="text-center">
            <BsPersonPlus style={{ fontSize: 48, marginBottom: 10 }} />
            <h1>Sign Up</h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" autoComplete="username" required />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" autoComplete="email" required />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" autoComplete="new-password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign Up
            </Button>
          </Form>
          <div className="text-center">
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
