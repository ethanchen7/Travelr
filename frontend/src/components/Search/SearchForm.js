import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchResults } from "../../store/search";
import "./SearchForm.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchResults(searchInput));

    history.push(`/search/${searchInput}`);
    setSearchInput("");
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={searchInput}
        placeholder="Have a place in mind?"
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <button className="search-button">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  );
};

export default SearchForm;
