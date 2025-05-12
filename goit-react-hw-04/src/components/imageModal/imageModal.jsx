import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Unsplash image'}
        />
        <div className={css.details}>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          {image.description && <p>Description: {image.description}</p>}
        </div>
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
      </div>
    </Modal>
  );
};

