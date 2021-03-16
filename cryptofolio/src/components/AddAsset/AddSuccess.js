import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

const AddSuccess = () => {
  const { closeModal, closeSuccess } = useGlobalContext();

  return (
    <section className="success-message">
      <h1>Success</h1>
      <FaRegCheckCircle className="success-icon" />
      <h2>You successfully added your new asset!</h2>
      <button
        type="button"
        className="primary-btn"
        onClick={() => {
          closeModal();
          closeSuccess();
        }}
      >
        <Link to="/portfolio">Go to my Portfolio</Link>
      </button>
      <p>
        Or add another asset <span>5 seconds</span>
      </p>
    </section>
  );
};

export default AddSuccess;
