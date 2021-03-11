import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useModalContext } from '../context';
import EditAsset from './Portfolio/EditAsset';

const Modal = () => {
  const { isModalOpen, closeModal } = useModalContext();

  //Close Modal with clicking on overlay
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  //Close Modal with Esc
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
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
        <button type="button" className="close-modal" onClick={closeModal}>
          <FaTimes className="icons" />
        </button>
        <EditAsset />
      </div>
    </div>
  );
};

export default Modal;
