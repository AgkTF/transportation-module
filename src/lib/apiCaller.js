import trans_axios from '../axios';

export const apiCaller = (values, url, method, history) => {
  console.log({ values });

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

  trans_axios({
    method,
    url,
    data: {
      ID,
      Name,
      Address,
      Country,
      City,
      TelephoneNumber,
      ContactPerson_Name,
      ContactPerson_TelephoneNumber,
      ContactPerson_Email,
      TransportationCompanyBuses: values.TransportationCompanyBuses,
    },
  })
    .then((response) => {
      console.log({ Success: response });
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
      history.push('/');
    });
};
