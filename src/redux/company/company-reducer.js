import CompanyActionTypes from './company-actionTypes';

const INITIAL_STATE = {
  company: {},
  isFetching: false,
  errorMsg: undefined,
};

const companyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CompanyActionTypes.FETCH_COMPANY_START:
      return {
        ...state,
        isFetching: true,
      };

    case CompanyActionTypes.FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        company: action.payload,
      };

    case CompanyActionTypes.FETCH_COMPANY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default companyReducer;
