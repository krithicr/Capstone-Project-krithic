import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EditJurisdictionForm = ({ initialData, handleUpdate, handleCancel }) => {
  const { jurisdictionId } = useParams(); // Extract jurisdictionId from URL params

  const [area, setArea] = useState('');
  const [ward, setWard] = useState('');
  const [layout, setLayout] = useState('');

  useEffect(() => {
    // Set initial values when the component mounts
    setArea(initialData.area || '');
    setWard(initialData.ward || '');
    setLayout(initialData.layout || '');
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the handleUpdate function with the updated data and jurisdictionId
    handleUpdate(jurisdictionId, { area, ward, layout });
  };

  return (
    <Card className="mx-auto mt-5 p-4" style={{ width: '400px' }}>
      <Card.Title className="text-center">Edit Jurisdiction</Card.Title>
      <Form onSubmit={handleSubmit}>
        {/* Form fields go here */}
        {/* ... */}

        <div className="d-grid gap-2">
          <Button type="submit" variant="success">
            Update
          </Button>
          <Button variant="danger" onClick={handleCancel} as={Link} to="/admin/jurisdiction">
            Cancel
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default EditJurisdictionForm;
