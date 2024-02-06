
import css from './ImageCard.module.css';

export const ImageCard = ({ items, isOpen }) => {

  return (
    <div>
      <img
        className={css.image}
        src={items.urls.small}
        alt={items.alt_description}
        onClick={() => isOpen(items.urls.regular)}
      />
    </div>
  );
};
