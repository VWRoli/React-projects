import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useModalContext } from '../context';

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
        <h1>This is modal window</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit incidunt repudiandae eligendi id, ullam velit quod
          consequuntur soluta recusandae quis. Ad natus facere dolor, dolorum
          quia nulla, accusantium non quam odit cupiditate neque ea rerum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          magnam harum ea? Eum, facilis ab, enim ullam voluptatum aliquid, et
          maiores vel sapiente placeat molestiae magnam necessitatibus.
          Explicabo, laudantium?
        </p>
      </div>
    </div>
  );
};

export default Modal;
