// import css from './contact.module.css';
import { ImageCard } from './components/imageGallery/imageCard'
import axios from "axios";
import { useEffect, useState } from "react";

const GalleryList = ({ items }) => (
    <ul>
	    {/* Zestaw elementów listy z obrazami */}
	    {items.map(({ objectID, title }) => (
            <li key={objectID}>
              <img src="" alt="" />
                {title}
            </li>
          ))}
    </ul>
);



export const ImageGallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
    async function fetchGallery() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>" // Trzeba podać inny link. Backend
      );
      setGallery(response.data.hits);
    }

    fetchGallery();
  }, []);


  return (
    <div>
      <h1>Gallery</h1>
      {gallery.length > 0 && <GalleryList items={gallery} />}
    </div>

      
  );
};

