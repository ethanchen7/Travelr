const SearchForm = () => {
  return (
    <form className="search-form">
      <button className="search-button">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
      <input type="text" className="search-input"></input>
    </form>
  );
};

export default SearchForm;
