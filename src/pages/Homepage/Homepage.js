import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { fetchCompaniesAsync } from '../../redux/homepage/home-actions';
import { Link } from 'react-router-dom';
import classes from './Homepage.module.scss';

const Homepage = ({ companies, fetchCompaniesAsync }) => {
  console.log(companies);

  // useEffect(() => {
  //   fetchCompaniesAsync();
  // }, []);

  return (
    <Layout>
      <Link to="/addCompany">
        <div className="btn btn-info font-weight-bold px-5">
          <span>
            <svg
              className={classes.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>{' '}
          Add Transportation
        </div>
      </Link>
      {/* </Button> */}

      <Table striped hover className="mt-3">
        <thead className="bg-info text-white">
          <tr className={classes.thead_titles}>
            <th>#</th>
            <th>Company ID #</th>
            <th>Company Name</th>
            <th>Total Fleet</th>
            <th>
              <svg
                className={classes.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </th>
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
                <Link to={`/editCompany?compId=${company.ID}`}>
                  <Button variant="info" className="px-4">
                    Edit
                  </Button>
                </Link>
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
