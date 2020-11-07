import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from 'react-bootstrap/Button';
import CompanyDataForm from '../../components/CompanyDataForm/CompanyDataForm';
import VehicleDataForm from '../../components/VehicleDataForm/VehicleDataForm';
import { FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchCompanyAsync } from '../../redux/company/company-actions';
import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';

const renderVehicleForms = ({ fields }) => (
  <>
    <Button
      variant="primary"
      className="mt-2 px-5"
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
            variant="primary"
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

let EditCompanyDetails = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  countryId,
  fetchCompanyAsync,
}) => {
  const location = useLocation();
  const companyId = queryString.parse(location.search).compId;

  useEffect(() => {
    fetchCompanyAsync(companyId);
  }, [companyId, fetchCompanyAsync]);

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <CompanyDataForm countryId={countryId} />

        <FieldArray
          name="TransportationCompanyBuses"
          component={renderVehicleForms}
        />

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

EditCompanyDetails = reduxForm({
  form: 'editCompanyDetails',
  enableReinitialize: true,
})(EditCompanyDetails);

//TODO: we might need the code to get the countryId to fetch the cities

const mapDispatchToProps = (dispatch) => ({
  fetchCompanyAsync: (id) => dispatch(fetchCompanyAsync(id)),
});

EditCompanyDetails = connect(null, mapDispatchToProps)(EditCompanyDetails);

EditCompanyDetails = connect((state) => {
  return {
    initialValues: state.company.company,
  };
})(EditCompanyDetails);

export default EditCompanyDetails;
