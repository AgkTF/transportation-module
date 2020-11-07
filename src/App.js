import './App.scss';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';
// import Homepage from './pages/Homepage/Homepage';
import trans_axios from './axios';

function App() {
  const submitHandler = (values) => {
    const {
      companyId,
      companyName,
      companyAddress,
      country,
      city,
      companyPhone,
      personName,
      personPhone,
      personEmail,
    } = values.CompanyDataForm;

    const busesArrayWithIDs = values.companyBuses.map((vehicle, index) => {
      return {
        ...vehicle,
        ID: index,
      };
    });

    trans_axios
      .post('/api/TransportationCompany/Add', {
        ID: companyId,
        Name: companyName,
        Address: companyAddress,
        Country: country,
        City: city,
        TelephoneNumber: companyPhone,
        ContactPerson_Name: personName,
        ContactPerson_TelephoneNumber: personPhone,
        ContactPerson_Email: personEmail,
        TransportationCompanyBuses: busesArrayWithIDs,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <CompanyDetails onSubmit={submitHandler} />;
  // return <Homepage />;
}

export default App;
