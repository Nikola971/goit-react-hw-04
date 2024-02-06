import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.search.value);
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchBar}
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
        <button className={css.btns} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
