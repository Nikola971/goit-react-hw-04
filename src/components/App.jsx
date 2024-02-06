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
  const [page, setLoad] = useState(1);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const SearchValue = searchValue => {
    setQuery(`${Date.now()}/${searchValue}`);
    setUnsplash([]);
    setLoad(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function ApiData() {
      try {
        setLoader(true);
        const data = await fetchData(query.split('/')[1], page);
        setUnsplash(prevData => [...prevData, ...data.results]);
        console.log(data);
        setShow(data.total_pages !== page);
        if (query.split('/')[1].length === 0) {
          toast('There are no images for this request');
        }
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
  // console.log(load);
  // console.log(show);
  return (
    <div>
      <SearchBar onSubmit={SearchValue} />
      <Toaster />
      <ImageGallery items={unsplash} />
      {loader && <Loader />}
      {show && <LoadMore onLoadMore={setLoad} value={page} />}
      {error && <ErrorMessage />}
    </div>
  );
};
