import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
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

let AddCompanyForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  countryId,
}) => (
  <CombinedForms
    handleSubmit={handleSubmit}
    pristine={pristine}
    reset={reset}
    submitting={submitting}
    countryId={countryId}
  />
);

AddCompanyForm = reduxForm({ form: 'completeDetailsForm', validate })(
  AddCompanyForm
);

const selector = formValueSelector('completeDetailsForm');
AddCompanyForm = connect((state) => {
  const countryId = selector(state, 'Country');

  return {
    countryId,
  };
})(AddCompanyForm);

export default AddCompanyForm;
