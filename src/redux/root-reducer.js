import { combineReducers } from 'redux';
import homeReducer from './homepage/home-reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  home: homeReducer,
  form: reduxFormReducer,
});

export default rootReducer;
