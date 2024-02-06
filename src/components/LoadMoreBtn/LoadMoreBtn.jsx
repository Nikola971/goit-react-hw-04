import css from './LoadMoreBtn.module.css';

export const LoadMore = ({ onLoadMore, value }) => {
  const loadMore = () => {
    onLoadMore(value + 1);
  };
  return (
    <button className={css.btns} onClick={loadMore}>
      LoadMore...
    </button>
  );
};
