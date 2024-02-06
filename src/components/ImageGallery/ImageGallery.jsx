import { ImageCard } from '../ImageCard/ImageCard';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageGallery.module.css';
import { useState } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

export const ImageGallery = ({ items }) => {
  const [regular, setRegular] = useState(null);
  const [state, setState] = useState(false);

  const handleOpenModal = regular => {
    setState(true);
    setRegular(regular);
  };

  const handleCloseModal = () => {
    setState(false);
  };

  return (
    <div>
      <ul className={css.container}>
        {items.map(item => {
          return (
            <li className={css.list} key={item.id}>
              <ImageCard items={item} isOpen={handleOpenModal} />
            </li>
          );
        })}
      </ul>
      <ImageModal src={regular} closetModal={handleCloseModal} value={state} />;
    </div>
  );
};
