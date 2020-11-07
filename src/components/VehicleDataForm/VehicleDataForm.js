import React, { useState, useEffect, useCallback } from 'react';
import trans_axios from '../../axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Field } from 'redux-form';

const VehicleDataForm = ({ number, vehicle, children }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  const fetchVehicleTypes = useCallback(() => {
    trans_axios
      .get('/api/Lookup/GetVehicleType')
      .then((response) => {
        console.log(response.data.Data);
        const vehicleTypes = response.data.Data;
        setVehicleTypes(vehicleTypes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchVehicleTypes();
  }, [fetchVehicleTypes]);

  return (
    <div className="mt-4 mt border rounded px-3 pt-2 shadow">
      <h4 className="text-info">Vehicle {number} Data</h4>
      <div className="mt-4">
        <Form.Row>
          <Col>
            <Form.Group controlId="vehicleType">
              <Form.Label>Vehicle Type</Form.Label>
              <Field
                name={`${vehicle}.BusTypeID`}
                component="select"
                parse={Number}
              >
                <option>Choose...</option>
                {vehicleTypes.map((type) => (
                  <option value={type.ID} key={type.ID}>
                    {type.Value}
                  </option>
                ))}
              </Field>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="vehicleBrand">
              <Form.Label>Brand</Form.Label>
              <Field type="text" name={`${vehicle}.Brand`} component="input" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="modelYear">
              <Form.Label>Model Year</Form.Label>
              <Field
                name={`${vehicle}.YearModel`}
                component="select"
                parse={Number}
              >
                <option>Choose...</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
              </Field>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Field name={`${vehicle}.Description`} component="textarea" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group controlId="noOfSeats">
              <Form.Label>Total no. of seats</Form.Label>
              <Field
                type="number"
                name={`${vehicle}.Number_Of_Seats`}
                component="input"
                parse={Number}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="seatsPerRow">
              <Form.Label>Total no. of seats per row</Form.Label>
              <Field
                type="number"
                name={`${vehicle}.Number_Of_Seats_Per_Raw`}
                component="input"
                parse={Number}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="noOfBuses">
              <Form.Label>Total no. of buses</Form.Label>
              <Field
                type="number"
                name={`${vehicle}.Total_Number_Of_Buses`}
                component="input"
                parse={Number}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group controlId="notes">
              <Form.Label>Notes</Form.Label>
              <Field name={`${vehicle}.Notes`} component="textarea" />
            </Form.Group>
          </Col>
        </Form.Row>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default VehicleDataForm;
