// JurisdictionPage.js
import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomNavbar from './Navbar';
const JurisdictionPage = () => {
  // Dummy data for the table
  const jurisdictionData = [
    { slno: 1, area: 'Area 1', ward: 'Ward 1', layout: 'Layout 1' },
    { slno: 2, area: 'Area 2', ward: 'Ward 2', layout: 'Layout 2' },
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

          {/* Add Jurisdiction Button */}
          <Button  className="mb-3" as={Link} to="add-jurisdiction" variant="success">
            Add Jurisdiction
          </Button>

          {/* Jurisdiction Table */}
          <Table striped bordered>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Area</th>
                <th>Ward</th>
                <th>Layout</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jurisdictionData.map((jurisdiction) => (
                <tr key={jurisdiction.slno}>
                  <td>{jurisdiction.slno}</td>
                  <td>{jurisdiction.area}</td>
                  <td>{jurisdiction.ward}</td>
                  <td>{jurisdiction.layout}</td>
                  <td>
                     <Link to={`/admin/jurisdiction/edit/${1}`}>
                        <FaEdit className="me-2" variant="success" />
                      </Link>

                    <Link to="delete-jurisdiction" variant="success">
                     <FaTrash style={{ color: 'red' }} /></Link>
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

export default JurisdictionPage;
