import React, { useEffect } from 'react';
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
import { fetchCompanyAsync } from '../../redux/company/company-actions';
import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';

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
        {/* <FormSection name="CompanyDataForm"> */}
        <CompanyDataForm countryId={countryId} />
        {/* </FormSection> */}

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
  // const companyData = state.
  return {
    initialValues: {
      ID: 50,
      Name: 'Holiday tours',
      Address: '12 GOGO st.',
      Country: 56,
      City: 895,
      TelephoneNumber: '0224586125',
      ContactPerson_Name: 'Fares',
      ContactPerson_TelephoneNumber: '01000000000',
      ContactPerson_Email: 'fares@gogo.com',
      TransportationCompanyBuses: [
        {
          BusTypeID: 3,
          Brand: 'Mazda',
          YearModel: 2020,
          Description: 'this is the bus',
          Number_Of_Seats: 53,
          Number_Of_Seats_Per_Raw: 5,
          Total_Number_Of_Buses: 2,
          Notes: 'this is all we have.',
          ID: 0,
        },
        {
          BusTypeID: 5,
          Brand: 'lincoln',
          YearModel: 2018,
          Description: 'lemo',
          Number_Of_Seats: 8,
          Number_Of_Seats_Per_Raw: 3,
          Total_Number_Of_Buses: 1,
          Notes: 'our lemo',
          ID: 1,
        },
      ],
    },
  };
})(EditCompanyDetails);

export default EditCompanyDetails;
