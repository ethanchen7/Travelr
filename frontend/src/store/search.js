import { csrfFetch } from "./csrf";

const LOAD_SEARCH = "comment/LOAD_SEARCH";

const loadSearch = (results) => {
  return {
    type: LOAD_SEARCH,
    results,
  };
};

export const getSearchResults = (search) => async (dispatch) => {
  const res = await csrfFetch(`/api/search/${search}`);
  const results = await res.json();
  dispatch(loadSearch(results));
};

const initialState = {};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SEARCH:
      return {
        ...state,
        searchResults: action.results,
      };
    default:
      return state;
  }
};

export default searchReducer;
