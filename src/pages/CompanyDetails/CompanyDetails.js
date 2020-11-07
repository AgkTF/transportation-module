import React from 'react';
import Layout from '../../components/Layout/Layout';
import Button from 'react-bootstrap/Button';
import CompanyDataForm from '../../components/CompanyDataForm/CompanyDataForm';
import VehicleDataForm from '../../components/VehicleDataForm/VehicleDataForm';
import {
  FieldArray,
  reduxForm,
  FormSection,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';

const renderVehicleForms = ({ fields }) => (
  <>
    <Button
      variant="secondary"
      className="px-5"
      onClick={() => fields.push({})}
    >
      Add vehicle
    </Button>
    {fields.map((vehicle, index) => (
      <VehicleDataForm key={index + 1} number={index + 1} vehicle={vehicle}>
        <>
          <Button
            variant="danger"
            className="px-5"
            onClick={() => fields.remove(index)}
          >
            Remove vehicle
          </Button>
          <Button
            variant="secondary"
            className="px-5"
            onClick={() => fields.push({})}
          >
            Add vehicle
          </Button>
        </>
      </VehicleDataForm>
    ))}
  </>
);

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
        <FormSection name="CompanyDataForm">
          <CompanyDataForm countryId={countryId} />
        </FormSection>

        <FieldArray name="companyBuses" component={renderVehicleForms} />

        <div className="mt-3">
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
            disabled={submitting}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </Layout>
  );
};

CompanyDetails = reduxForm({ form: 'completeDetailsForm' })(CompanyDetails);

const selector = formValueSelector('completeDetailsForm');
CompanyDetails = connect((state) => {
  const countryId = selector(state, 'CompanyDataForm.country');

  return {
    countryId,
  };
})(CompanyDetails);

export default CompanyDetails;
