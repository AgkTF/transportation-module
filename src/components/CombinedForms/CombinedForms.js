import React from 'react';
import Button from 'react-bootstrap/Button';
import Layout from '../Layout/Layout';
import CompanyDataForm from '../CompanyDataForm/CompanyDataForm';
import { FieldArray } from 'redux-form';
import renderVehicleForms from '../../lib/formRenderer';

const CombinedForms = ({
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

export default CombinedForms;
