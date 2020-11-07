import trans_axios from '../axios';

export const apiCaller = (values, url, method, history) => {
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
      TransportationCompanyBuses: busesArrayWithIDs,
    },
  })
    .then((response) => {
      console.log(response);
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
      history.push('/');
    });
};
