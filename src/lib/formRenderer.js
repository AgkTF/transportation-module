import Button from 'react-bootstrap/Button';
import VehicleDataForm from '../components/VehicleDataForm/VehicleDataForm';

const renderVehicleForms = ({
  fields,
  meta: { touched, error, submitFailed },
}) => {
  return (
    <>
      <Button
        variant="primary"
        className="mt-2 px-5"
        onClick={() => fields.push({})}
      >
        Add vehicle
      </Button>

      {(touched || submitFailed) && error && (
        <div className="text-danger mt-2">{error}</div>
      )}

      {fields.map((vehicle, index) => (
        <VehicleDataForm key={index + 1} number={index + 1} vehicle={vehicle}>
          <div className="mt-2 mb-3">
            {index === 0 ? (
              <Button
                variant="primary"
                className="px-5"
                onClick={() => fields.push({})}
              >
                Add vehicle
              </Button>
            ) : (
              <>
                <Button
                  variant="danger"
                  className="px-5"
                  onClick={() => fields.remove(index)}
                >
                  Remove vehicle
                </Button>
                <Button
                  variant="primary"
                  className="px-5 ml-3"
                  onClick={() => fields.push({})}
                >
                  Add vehicle
                </Button>
              </>
            )}
          </div>
        </VehicleDataForm>
      ))}
    </>
  );
};

export default renderVehicleForms;
