import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {SearchBar} from './components/searchBar/searchBar';
import {ImageGallery} from './components/imageGallery/imageGallery';
import {Loader} from './components/loader/loader';
import {ErrorMessage} from './components/errorMessage/errorMessage';
import {LoadMoreBtn} from './components/loadMoreBtn/loadMoreBtn';
import { ImageModal } from './components/imageModal/imageModal';


const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const UNSPLASH_API_KEY = 'PGI3nf1QC4t66mTor18UydYEISdAhcNi5fDrOfmA5nw';
  const BASE_URL = 'https://api.unsplash.com/search/photos';

  useEffect(() => {
    // if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: UNSPLASH_API_KEY,
          },
        });
        setImages(prevImages => [...prevImages, ...response.data.results]);
        setHasMore(response.data.total_pages > page);
      } catch (error) {
          console.error('Fetch error:', error); // Teraz error jest używany
          setError(true);
        toast.error('Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (!newQuery.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch}  />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {hasMore && images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;