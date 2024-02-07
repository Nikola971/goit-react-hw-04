import { useEffect, useState } from 'react';
import { fetchData } from '../api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [unsplash, setUnsplash] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const SearchValue = (searchValue) => {
    setQuery(`${Date.now()}/${searchValue}`);
    setUnsplash([]);
    setPage(1);
    setTotalPages(0);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function ApiData() {
      try {
        setLoader(true);
        const data = await fetchData(query.split('/')[1], page);

        if (data.results.length === 0 && page === 1) {
          toast('There are no images for this request');
          return;
        }

        setUnsplash((prevData) => [...prevData, ...data.results]);
        setTotalPages(data.total_pages);

      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setTimeout(() => {
          setError(false);
        }, 2000);
        setLoader(false);
      }
    }

    ApiData();
  }, [query, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={SearchValue} />
      <Toaster />
      <ImageGallery items={unsplash} />
      {loader && <Loader />}
      {page < totalPages && <LoadMore onLoadMore={onLoadMore} />}
      {error && <ErrorMessage />}
    </div>
  );
};
