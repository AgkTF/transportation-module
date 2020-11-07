import React, { useEffect } from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
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
  // console.log(countryId);

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
  validate,
  enableReinitialize: true,
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
