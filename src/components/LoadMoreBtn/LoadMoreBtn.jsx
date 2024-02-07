import css from './LoadMoreBtn.module.css';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <button className={css.btns} onClick={onLoadMore}>
      Load More...
    </button>
  );
};
