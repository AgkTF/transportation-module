import './App.scss';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';
import Homepage from './pages/Homepage/Homepage';
import trans_axios from './axios';
import { Switch, Route, Redirect } from 'react-router-dom';
import EditCompanyDetails from './pages/EditCompanyForm/EditCompanyForm';

function App() {
  const submitHandler = (values) => {
    const {
      ID,
      Name,
      Address,
      Country,
      City,
      TelephoneNumber,
      ContactPerson_Name,
      ContactPerson_TelephoneNumber,
      ContactPerson_Email,
    } = values;

    const busesArrayWithIDs = values.TransportationCompanyBuses.map(
      (vehicle, index) => {
        return {
          ...vehicle,
          ID: index,
        };
      }
    );

    trans_axios
      .post('/api/TransportationCompany/Add', {
        ID,
        Name,
        Address,
        Country,
        City,
        TelephoneNumber,
        ContactPerson_Name,
        ContactPerson_TelephoneNumber,
        ContactPerson_Email,
        TransportationCompanyBuses: busesArrayWithIDs,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Switch>
      <Route
        path="/editCompany"
        render={() => <EditCompanyDetails onSubmit={submitHandler} />}
      />

      <Route
        path="/addCompany"
        exact
        render={() => <CompanyDetails onSubmit={submitHandler} />}
      />

      <Route path="/" component={Homepage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
