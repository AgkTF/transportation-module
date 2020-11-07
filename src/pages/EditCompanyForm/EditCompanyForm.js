import React, { useEffect } from 'react';
// import Layout from '../../components/Layout/Layout';
// import Button from 'react-bootstrap/Button';
// import CompanyDataForm from '../../components/CompanyDataForm/CompanyDataForm';
// import VehicleDataForm from '../../components/VehicleDataForm/VehicleDataForm';
import { FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { fetchCompanyAsync } from '../../redux/company/company-actions';
import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';

import CombinedForms from '../../components/CombinedForms/CombinedForms';

const validate = (values) => {
  const errors = {};

  if (
    !values.TransportationCompanyBuses ||
    !values.TransportationCompanyBuses.length
  ) {
    errors.TransportationCompanyBuses = {
      _error: 'At least one vehicle must be entered',
    };
  }

  return errors;
};

// const renderVehicleForms = ({ fields }) => (
//   <>
//     <Button
//       variant="primary"
//       className="mt-2 px-5"
//       onClick={() => fields.push({})}
//     >
//       Add vehicle
//     </Button>
//     {fields.map((vehicle, index) => (
//       <VehicleDataForm key={index + 1} number={index + 1} vehicle={vehicle}>
//         <>
//           <Button
//             variant="danger"
//             className="px-5"
//             onClick={() => fields.remove(index)}
//           >
//             Remove vehicle
//           </Button>
//           <Button
//             variant="primary"
//             className="px-5"
//             onClick={() => fields.push({})}
//           >
//             Add vehicle
//           </Button>
//         </>
//       </VehicleDataForm>
//     ))}
//   </>
// );

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
  console.log(countryId);

  useEffect(() => {
    fetchCompanyAsync(companyId);
  }, [companyId, fetchCompanyAsync]);

  return (
    <CombinedForms
      handleSubmit={handleSubmit}
      pristine={pristine}
      reset={reset}
      submitting={submitting}
      countryId={countryId}
    />
  );
};

EditCompanyDetails = reduxForm({
  form: 'editCompanyDetails',
  enableReinitialize: true,
  validate,
})(EditCompanyDetails);

const selector = formValueSelector('editCompanyDetails');

const mapDispatchToProps = (dispatch) => ({
  fetchCompanyAsync: (id) => dispatch(fetchCompanyAsync(id)),
});

EditCompanyDetails = connect(null, mapDispatchToProps)(EditCompanyDetails);

EditCompanyDetails = connect((state) => {
  return {
    initialValues: state.company.company,
    countryId: selector(state, 'Country'),
  };
})(EditCompanyDetails);

export default EditCompanyDetails;
