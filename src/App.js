import './App.scss';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';
import Homepage from './pages/Homepage/Homepage';
// import trans_axios from './axios';
import { Switch, Route, Redirect } from 'react-router-dom';
import EditCompanyDetails from './pages/EditCompanyForm/EditCompanyForm';
import { apiCaller } from './lib/apiCaller';

function App() {
  // const submitHandler = (values) => {
  //   const {
  //     ID,
  //     Name,
  //     Address,
  //     Country,
  //     City,
  //     TelephoneNumber,
  //     ContactPerson_Name,
  //     ContactPerson_TelephoneNumber,
  //     ContactPerson_Email,
  //   } = values;

  //   const busesArrayWithIDs = values.TransportationCompanyBuses.map(
  //     (vehicle, index) => {
  //       return {
  //         ...vehicle,
  //         ID: index,
  //       };
  //     }
  //   );

  //   trans_axios
  //     .post('/api/TransportationCompany/Add', {
  //       ID,
  //       Name,
  //       Address,
  //       Country,
  //       City,
  //       TelephoneNumber,
  //       ContactPerson_Name,
  //       ContactPerson_TelephoneNumber,
  //       ContactPerson_Email,
  //       TransportationCompanyBuses: busesArrayWithIDs,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const addSubmitHandler = (values) => {
    apiCaller(values, '/api/TransportationCompany/Add', 'post');
  };

  const editSubmitHandler = (values) => {
    console.log(values);
    apiCaller(values, '/api/TransportationCompany/Update', 'put');
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
        render={() => <CompanyDetails onSubmit={addSubmitHandler} />}
      />

      <Route path="/" component={Homepage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
