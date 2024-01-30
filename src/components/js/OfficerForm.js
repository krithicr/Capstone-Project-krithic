import React, { useState, useEffect } from 'react';
import { Card, Form, Button ,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OfficerForm = ({ handleSave, handleCancel }) => {
  const [area, setArea] = useState('');
  const [ward, setWard] = useState('');
  const [layout, setLayout] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [wardOptions, setWardOptions] = useState([]);
  const [layoutOptions, setLayoutOptions] = useState([]);

  // Simulating data for areas, wards, and layouts
  const areas = ['Area 1', 'Area 2'];
  const wardsByArea = {
    'Area 1': ['Ward 1A', 'Ward 1B'],
    'Area 2': ['Ward 2A', 'Ward 2B'],
  };
  const layoutsByWard = {
    'Ward 1A': ['Layout 1A', 'Layout 1B'],
    'Ward 1B': ['Layout 1C', 'Layout 1D'],
    'Ward 2A': ['Layout 2A', 'Layout 2B'],
    'Ward 2B': ['Layout 2C', 'Layout 2D'],
  };

  useEffect(() => {
    // Set ward options when the area changes
    setWardOptions(wardsByArea[area] || []);
    // Reset ward and layout when the area changes
    setWard('');
    setLayout('');
  }, [area]);

  useEffect(() => {
    // Set layout options when the ward changes
    setLayoutOptions(layoutsByWard[ward] || []);
    // Reset layout when the ward changes
    setLayout('');
  }, [ward]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the handleSave function with the officer details
    handleSave({ area, ward, layout, name, email, phone, address });
  };

  return (
    <Card className="mx-auto mt-5 p-4" style={{ width: '600px' }}>
      <Card.Title className="text-center">Create Officer</Card.Title>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Col} controlId="area">
          <Form.Label>Area</Form.Label>
          <Form.Control
            as="select"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          >
            {/* Options for Area dropdown */}
            <option value="">Select Area</option>
            <option value="area1">Area 1</option>
            <option value="area2">Area 2</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="ward">
          <Form.Label>Ward</Form.Label>
          <Form.Control
            as="select"
            value={ward}
            onChange={(e) => setWard(e.target.value)}
            required
          >
            {/* Options for Ward dropdown */}
            <option value="">Select Ward</option>
            <option value="ward1">Ward 1</option>
            <option value="ward2">Ward 2</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="layout">
          <Form.Label>Layout</Form.Label>
          <Form.Control
            as="select"
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
            required
          >
            {/* Options for Layout dropdown */}
            <option value="">Select Layout</option>
            <option value="layout1">Layout 1</option>
            <option value="layout2">Layout 2</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="name">
          <Form.Label>Officer Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Officer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-between mt-3">
            <Button type="submit" variant="success" as={Link} to="/admin/officers" >
             Save
             </Button>
        <Button variant="danger" onClick={handleCancel} as={Link} to="/admin/officers" >
        Cancel
        </Button>
        </div>

      </Form>
    </Card>
  );
};

export default OfficerForm;
