// import css from './contact.module.css';
import { ImageCard } from './components/imageGallery/imageCard'


export const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul>
      {items.map(image => (
        <li key={image.Id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};


