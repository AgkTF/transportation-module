import React, { useState, useEffect, useCallback } from 'react';
import trans_axios from '../../axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Field } from 'redux-form';

// Define form validators
const required = (value) => (value ? undefined : 'Required');
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

// a custom input field creator
const renderField = ({ input, type, meta: { touched, error }, children }) => (
  <>
    {children ? (
      <Form.Control {...input} type={type} as={type}>
        {children}
      </Form.Control>
    ) : (
      <Form.Control {...input} type={type} />
    )}
    {touched && error && (
      <span className="text-danger">
        <small>{error}</small>
      </span>
    )}
  </>
);

let CompanyDataForm = ({ children, countryId }) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchCountries = useCallback(() => {
    trans_axios
      .get('/api/Lookup/GetCountries')
      .then((response) => {
        // console.log(response.data.Data);
        const countries = response.data.Data;
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchCities = useCallback((id) => {
    trans_axios
      .get(`/api/Lookup/GetCities?countryId=${id}`)
      .then((response) => {
        // console.log(response.data.Data);
        const cities = response.data.Data;
        setCities(cities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchCountries();

    // call fetchCities only when there's a valid countryId
    if (['Choose...', undefined].includes(countryId)) {
      return;
    }
    fetchCities(countryId);
  }, [fetchCountries, fetchCities, countryId]);

  return (
    <div className="mt-4 mt border rounded px-3 pt-2 shadow">
      <h4 className="mt-1 text-info">Company Data</h4>
      <div className="mt-4">
        <Form.Row>
          <Col>
            <Form.Group controlId="companyName">
              <Form.Label className="">Company Name</Form.Label>
              <Field
                type="text"
                name="Name"
                component={renderField}
                validate={required}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyId">
              <Form.Label>Company ID#</Form.Label>
              <Field
                type="number"
                name="ID"
                component={renderField}
                validate={required}
                parse={Number}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyAddress">
              <Form.Label>Company Address</Form.Label>
              <Field
                type="text"
                name="Address"
                component={renderField}
                validate={required}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyCountry">
              <Form.Label>Country</Form.Label>
              <Field
                name="Country"
                type="select"
                component={renderField}
                parse={Number}
                validate={required}
              >
                <option>Choose...</option>
                {countries.map((country) => (
                  <option value={country.ID} key={country.ID}>
                    {country.Value}
                  </option>
                ))}
              </Field>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyCity">
              <Form.Label>City</Form.Label>
              <Field
                name="City"
                type="select"
                component={renderField}
                parse={Number}
                validate={required}
              >
                <option>Choose...</option>
                {cities.map((city) => (
                  <option value={city.ID} key={city.ID}>
                    {city.Value}
                  </option>
                ))}
              </Field>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="companyTelNo">
              <Form.Label>Company Telephone no.</Form.Label>
              <Field
                type="tel"
                name="TelephoneNumber"
                component={renderField}
                validate={required}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="personName">
              <Form.Label>Contact Person Name</Form.Label>
              <Field
                type="text"
                name="ContactPerson_Name"
                component={renderField}
                validate={required}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="personTelNo">
              <Form.Label>Contact Person Tel. no.</Form.Label>
              <Field
                type="tel"
                name="ContactPerson_TelephoneNumber"
                component={renderField}
                validate={required}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="personEmail">
              <Form.Label>Contact Person Email</Form.Label>
              <Field
                type="email"
                name="ContactPerson_Email"
                component={renderField}
                validate={[required, email]}
              />
            </Form.Group>
          </Col>

          <Col></Col>
        </Form.Row>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default CompanyDataForm;
