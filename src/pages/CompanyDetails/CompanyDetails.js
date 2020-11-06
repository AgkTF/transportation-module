import React from 'react';
import Layout from '../../components/Layout/Layout';
import CompanyDataForm from '../../components/CompanyDataForm/CompanyDataForm';
import Button from 'react-bootstrap/Button';
import VehicleDataForm from '../../components/VehicleDataForm/VehicleDataForm';

const CompanyDetails = () => {
  return (
    <Layout>
      <CompanyDataForm />
      <VehicleDataForm />

      <div className="mt-3">
        <Button variant="secondary" className="px-5">
          Clear
        </Button>
        <Button variant="info" className="ml-3 px-5">
          Save
        </Button>
      </div>
    </Layout>
  );
};

export default CompanyDetails;
