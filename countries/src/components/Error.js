import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-sign" />
      <p>Error fetching data, please try again later...</p>
    </div>
  );
};

export default Error;
