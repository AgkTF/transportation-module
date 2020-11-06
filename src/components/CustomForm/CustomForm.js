import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const CustomForm = () => {
  return (
    <div className="mt-4 mt border rounded px-3 pt-2 shadow">
      <h4 className="text-info">Company Data</h4>
      <Form className="mt-4">
        <Form.Row>
          <Col>
            <Form.Group controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyId">
              <Form.Label>Company ID#</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyAddress">
              <Form.Label>Company Address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="companyCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyCity">
              <Form.Label>City</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyTelNo">
              <Form.Label>Company Telephone no.</Form.Label>
              <Form.Control type="tel" />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="personName">
              <Form.Label>Contact Person Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="personTelNo">
              <Form.Label>Contact Person Tel. no.</Form.Label>
              <Form.Control type="tel" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="personEmail">
              <Form.Label>Contact Person Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default CustomForm;
