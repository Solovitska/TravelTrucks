import css from './SearchBtn.module.css';

const SearchBtn = () => {
  return (
    <button className={css.searchBtn} type="submit">
      Search
    </button>
  );
};

export default SearchBtn;
