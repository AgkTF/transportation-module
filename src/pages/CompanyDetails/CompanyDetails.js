import React from 'react';
import Layout from '../../components/Layout/Layout';
import Button from 'react-bootstrap/Button';
import CompanyDataForm from '../../components/CompanyDataForm/CompanyDataForm';
import VehicleDataForm from '../../components/VehicleDataForm/VehicleDataForm';
import { FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

const validate = (values) => {
  const errors = {};

  if (!values.companyBuses || !values.companyBuses.length) {
    errors.companyBuses = {
      _error: 'At least one vehicle must be entered',
    };
  }

  return errors;
};

const renderVehicleForms = ({
  fields,
  meta: { touched, error, submitFailed },
}) => {
  return (
    <>
      <Button
        variant="primary"
        className="mt-2 px-5"
        onClick={() => fields.push({})}
      >
        Add vehicle
      </Button>

      {(touched || submitFailed) && error && (
        <div className="text-danger mt-2">{error}</div>
      )}

      {fields.map((vehicle, index) => (
        <VehicleDataForm key={index + 1} number={index + 1} vehicle={vehicle}>
          <div className="mt-2 mb-3">
            <Button
              variant="danger"
              className="px-5"
              onClick={() => fields.remove(index)}
            >
              Remove vehicle
            </Button>
            <Button
              variant="primary"
              className="px-5 ml-3"
              onClick={() => fields.push({})}
            >
              Add vehicle
            </Button>
          </div>
        </VehicleDataForm>
      ))}
    </>
  );
};

let CompanyDetails = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  countryId,
}) => {
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <CompanyDataForm countryId={countryId} />

        <FieldArray
          name="TransportationCompanyBuses"
          component={renderVehicleForms}
        />

        <div className="my-3">
          <Button
            variant="secondary"
            className="px-5"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </Button>
          <Button
            variant="info"
            className="ml-3 px-5"
            disabled={pristine || submitting}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </Layout>
  );
};

CompanyDetails = reduxForm({ form: 'completeDetailsForm', validate })(
  CompanyDetails
);

const selector = formValueSelector('completeDetailsForm');
CompanyDetails = connect((state) => {
  const countryId = selector(state, 'Country');

  return {
    countryId,
  };
})(CompanyDetails);

export default CompanyDetails;
