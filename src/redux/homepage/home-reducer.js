import HomeActionTypes from './home-actionTypes';

const INITIAL_STATE = {
  companies: [],
  isFetching: false,
  errorMsg: undefined,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_COMPANIES_START:
      return {
        ...state,
        isFetching: true,
      };

    case HomeActionTypes.FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        companies: action.payload,
      };

    case HomeActionTypes.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
