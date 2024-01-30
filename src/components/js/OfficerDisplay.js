import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OfficerPage = () => {
  // Dummy data for the table
  const officerData = [
    {
      slno: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      area: 'Area 1',
      ward: 'Ward 1',
      layout: 'Layout 1',
    },
    {
      slno: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '987-654-3210',
      area: 'Area 2',
      ward: 'Ward 2',
      layout: 'Layout 2',
    },
    // Add more data as needed
  ];

  return (
    <Container>
      {/* Body */}
      <Row className="mt-4">
        <Col xs={12} md={6} className="mx-auto">
          {/* Search Bar */}
          <Form className="mb-3">
            <Form.Group className="d-flex">
              <Form.Control type="text" placeholder="Search..." />
              <Button variant="outline-primary" className="ms-2">
                Search
              </Button>
            </Form.Group>
          </Form>

          {/* Add Officer Button */}
          <Button className="mb-3" as={Link} to="add-officer" variant="success">
            Add Officer
          </Button>

          {/* Officer Table */}
          <Table striped bordered>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Area</th>
                <th>Ward</th>
                <th>Layout</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {officerData.map((officer) => (
                <tr key={officer.slno}>
                  <td>{officer.slno}</td>
                  <td>{officer.name}</td>
                  <td>{officer.email}</td>
                  <td>{officer.phone}</td>
                  <td>{officer.area}</td>
                  <td>{officer.ward}</td>
                  <td>{officer.layout}</td>
                  <td>
                    <Link to={`/admin/officers/edit/${officer.slno}`}>
                      <FaEdit className="me-2" variant="success" />
                    </Link>
                    <Link to="delete-officer" variant="success">
                      <FaTrash style={{ color: 'red' }} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OfficerPage;
