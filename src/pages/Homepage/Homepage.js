import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { fetchCompaniesAsync } from '../../redux/homepage/home-actions';

const Homepage = ({ companies, fetchCompaniesAsync }) => {
  console.log(companies);

  useEffect(() => {
    fetchCompaniesAsync();
  }, []);

  return (
    <Layout>
      <Button variant="info" className="mt-3">
        <span>+</span> Add Transportation
      </Button>

      <Table striped hover className="mt-4">
        <thead className="bg-info text-white">
          <tr>
            <th>#</th>
            <th>Company ID #</th>
            <th>Company Name</th>
            <th>Total Fleet</th>
            <th>gear</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company) => (
            <tr key={company.ID}>
              <td></td>
              <td>{company.ID}</td>
              <td>{company.Name}</td>
              <td>{company.TotalFleet}</td>
              <td>
                <Button variant="info" className="px-4">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};

//TODO: recheck the below destructure
const mapStateToProps = ({ home }) => ({
  companies: home.companies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompaniesAsync: () => dispatch(fetchCompaniesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
