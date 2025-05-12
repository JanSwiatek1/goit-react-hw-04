import { ImageGallery } from './components/imageGallery/imageGallery'
import { SearchBar } from './components/searchBar/searchBar'
import { Loader } from './components/loader/loader';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import './App.css'
import { LoadMoreBtn } from './components/loadMoreBtn/loadMoreBtn';
import { ImageModal } from './components/imageModal/imageModal';
import { ErrorMessage } from './components/errorMessage/errorMessage';

function App() {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const UNSPLASH_API_KEY = 'PGI3nf1QC4t66mTor18UydYEISdAhcNi5fDrOfmA5nw';
  const BASE_URL = 'https://api.unsplash.com/search/photos';
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return; 
    async function fetchGallery() {
      try {
        setGallery([]);
        setLoading(true);
        setError(false);

        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: UNSPLASH_API_KEY
          },
        });
        setGallery(response.data.results);
        
      } catch(error) {
        setError(true);
        toast.error('Failed to fetch images. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (!newQuery.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    setQuery(newQuery);
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
    <>
      <SearchBar onSubmit={handleSearch}/>
      <div>
        <h1>Latest photos</h1>
          {loading && <Loader/>}
          {error && <ErrorMessage />}
        {gallery.length > 0 && <ImageGallery items={gallery} onImageClick={openModal}/>}
      </div>

      <LoadMoreBtn onClick={handleLoadMore} />
      

        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />

    </>
  )
}

export default App
