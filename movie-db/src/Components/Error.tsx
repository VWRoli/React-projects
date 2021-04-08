import { FaExclamationTriangle } from "react-icons/fa";

const Error: React.FC = () => {
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-sign" />
      <p>Something went wrong.</p>
      <p>Please refresh the page or try again later...</p>
    </div>
  );
};

export default Error;
