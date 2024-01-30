// JurisdictionForm.js
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from './Navbar';

const JurisdictionForm = ({ handleCreate, handleCancel, handleLogout }) => {
  const [area, setArea] = useState('');
  const [ward, setWard] = useState('');
  const [layout, setLayout] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleCreate({ area, ward, layout });
  };

  return (
      <Card className="mx-auto mt-5 p-4" style={{ width: '400px' }}>
       
      <Card.Title className="text-center">Add Jurisdiction</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="area">
          <Form.Label>Area</Form.Label>
          <Form.Control
            type="dropdown"
            placeholder="Enter Area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ward">
          <Form.Label>Ward</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Ward"
            value={ward}
            onChange={(e) => setWard(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="layout">
          <Form.Label>Layout</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Layout"
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button type="submit" variant="success" as={Link} to="/admin/jurisdiction">
            Create
          </Button>
          <Button variant="danger" onClick={handleCancel}  as={Link} to="/admin/jurisdiction" >
            Cancel
          </Button>
        </div>
      </Form>
      
    </Card>
  );
};

export default JurisdictionForm;
