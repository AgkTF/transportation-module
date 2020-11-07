import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import companyReducer from './company/company-reducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  company: companyReducer,
});

export default rootReducer;
