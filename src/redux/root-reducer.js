import { combineReducers } from 'redux';
import homeReducer from './homepage/home-reducer';
import { reducer as reduxFormReducer } from 'redux-form';
import companyReducer from './company/company-reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  form: reduxFormReducer,
  company: companyReducer,
});

export default rootReducer;
