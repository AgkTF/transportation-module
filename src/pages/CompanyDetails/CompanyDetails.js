import React from 'react';
import Layout from '../../components/Layout/Layout';
import CustomForm from '../../components/CustomForm/CustomForm';
import Button from 'react-bootstrap/Button';
import './CompanyDetails.scss';

const CompanyDetails = () => {
  return (
    <Layout>
      <CustomForm />

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
