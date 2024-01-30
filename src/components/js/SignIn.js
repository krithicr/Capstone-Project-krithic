// SignIn.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsLock } from 'react-icons/bs';
import '../Css/SignUp.css'

const SignIn = ({ onSignIn }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSignIn({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container fluid className="d-flex align-items-center min-vh-100 bg-color">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="text-center">
            <BsLock style={{ fontSize: 48, marginBottom: 10 }} />
            <h1>Sign In</h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" autoComplete="email" required />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" autoComplete="current-password" required />
            </Form.Group>
            <Form.Group controlId="remember" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign In
            </Button>
          </Form>
          <div className="text-center">
            <p>
              <a href="#">Forgot password?</a>
            </p>
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
