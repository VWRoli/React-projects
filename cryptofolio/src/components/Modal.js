import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import AddNewAsset from './AddAsset/AddNewAsset';
import AddSuccess from './AddAsset/AddSuccess';

const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    activeCoin,
    displaySuccess,
    closeSuccess,
  } = useGlobalContext();

  //Close Modal with clicking on overlay
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
      closeSuccess();
    }
  };

  //Close Modal with Esc
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeSuccess();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div
      className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}
      onClick={handleClick}
    >
      <div className="modal-container">
        <button
          type="button"
          className="close-modal"
          onClick={() => {
            closeModal();
            closeSuccess();
          }}
        >
          <FaTimes className="icons" />
        </button>
        {displaySuccess ? <AddSuccess /> : <AddNewAsset id={activeCoin} />}
      </div>
    </div>
  );
};

export default Modal;
