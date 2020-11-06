import HomeActionTypes from './home-actionTypes';
import trans_axios from '../../axios';

export const fetchCompaniesStart = () => ({
  type: HomeActionTypes.FETCH_COMPANIES_START,
});

export const fetchCompaniesSuccess = (companies) => ({
  type: HomeActionTypes.FETCH_COMPANIES_SUCCESS,
  payload: companies,
});

export const fetchCompaniesFailure = (errorMsg) => ({
  type: HomeActionTypes.FETCH_COMPANIES_FAILURE,
  payload: errorMsg,
});

export const fetchCompaniesAsync = () => {
  return (dispatch) => {
    dispatch(fetchCompaniesStart());

    trans_axios
      .get('/api/TransportationCompany/All')
      .then((response) => {
        console.log(response.data.Data); // this is an array
        const companiesData = response.data.Data;
        dispatch(fetchCompaniesSuccess(companiesData));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          dispatch(fetchCompaniesFailure(error.response.data));
        }
      });
  };
};
