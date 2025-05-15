import Modal from 'react-modal';
import css from './imageModal.module.css';

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
      <div  className={css.box}>
      <div className={css.content}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Unsplash image'}
          className={css.foto}
        />
        <button className={css.closeButton} onClick={onClose}>
          ×
        </button>
        
        
      </div>
      <div className={css.details}>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          {image.description && <p>Description: {image.description}</p>}
      </div>
      </div>
    </Modal>
  );
};

