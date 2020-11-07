import './App.scss';
import AddCompanyForm from './pages/AddCompanyForm/AddCompanyForm';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import EditCompanyDetails from './pages/EditCompanyForm/EditCompanyForm';
import { apiCaller } from './lib/apiCaller';

function App() {
  let history = useHistory();

  const addSubmitHandler = (values) => {
    apiCaller(values, '/api/TransportationCompany/Add', 'post', history);
  };

  const editSubmitHandler = (values) => {
    apiCaller(values, '/api/TransportationCompany/Update', 'put', history);
  };

  return (
    <Switch>
      <Route
        path="/editCompany"
        render={() => <EditCompanyDetails onSubmit={editSubmitHandler} />}
      />

      <Route
        path="/addCompany"
        exact
        render={() => <AddCompanyForm onSubmit={addSubmitHandler} />}
      />

      <Route path="/" component={Homepage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
