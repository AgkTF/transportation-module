import React, { useState, useEffect, useCallback } from 'react';
import trans_axios from '../../axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Field } from 'redux-form';

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
    if (['Choose...', undefined].includes(countryId)) {
      return;
    }
    fetchCities(countryId);
  }, [fetchCountries, fetchCities, countryId]);

  // we could extract bootstrap select here. We'll see

  return (
    <div className="mt-4 mt border rounded px-3 pt-2 shadow">
      <h4 className="text-info">Company Data</h4>
      <div className="mt-4">
        <Form.Row>
          <Col>
            <Form.Group controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Field type="text" name="companyName" component="input" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyId">
              <Form.Label>Company ID#</Form.Label>
              <Field
                type="number"
                name="companyId"
                component="input"
                parse={Number}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyAddress">
              <Form.Label>Company Address</Form.Label>
              <Field type="text" name="companyAddress" component="input" />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="companyCountry">
              <Form.Label>Country</Form.Label>
              <Field name="country" component="select" parse={Number}>
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
              <Field name="city" component="select" parse={Number}>
                <option>Choose...</option>
                {cities.map((city) => (
                  <option value={city.ID} key={city.ID}>
                    {city.Value}
                  </option>
                ))}
              </Field>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="companyTelNo">
              <Form.Label>Company Telephone no.</Form.Label>
              <Field type="tel" name="companyPhone" component="input" />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="personName">
              <Form.Label>Contact Person Name</Form.Label>
              <Field type="text" name="personName" component="input" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="personTelNo">
              <Form.Label>Contact Person Tel. no.</Form.Label>
              <Field type="tel" name="personPhone" component="input" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="personEmail">
              <Form.Label>Contact Person Email</Form.Label>
              <Field type="email" name="personEmail" component="input" />
            </Form.Group>
          </Col>
        </Form.Row>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default CompanyDataForm;
