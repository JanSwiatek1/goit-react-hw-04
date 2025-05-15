import css from './imageGallery.module.css';
import { ImageCard } from './imageCard'


export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};


