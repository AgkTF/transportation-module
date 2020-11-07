import CompanyActionTypes from './company-actionTypes';
import trans_axios from '../../axios';

export const fetchCompanyStart = () => ({
  type: CompanyActionTypes.FETCH_COMPANY_START,
});

export const fetchCompanySuccess = (company) => ({
  type: CompanyActionTypes.FETCH_COMPANY_SUCCESS,
  payload: company,
});

export const fetchCompanyFailure = (errorMsg) => ({
  type: CompanyActionTypes.FETCH_COMPANY_FAILURE,
  payload: errorMsg,
});

export const fetchCompanyAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchCompanyStart());

    trans_axios
      .get(`/api/TransportationCompany/GetById?id=${id}`)
      .then((response) => {
        // console.log(response.data.Data); // this is an object
        const companyData = response.data.Data;
        dispatch(fetchCompanySuccess(companyData));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          dispatch(fetchCompanyFailure(error.response.data));
        }
      });
  };
};
