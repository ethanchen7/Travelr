import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/image";
import ImageCard from "../ImageCard";

const Search = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { searchInput } = useParams();
  const searchResults = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="body-container">
      {searchResults && searchResults.length ? (
        <>
          <p>{`Search results for "${searchInput}"`}</p>
          <div className="inner-container">
            {searchResults.map((result) => (
              <ImageCard key={result.id} image={result} explorePage={true} />
            ))}
          </div>
        </>
      ) : (
        <p>{`No search results for "${searchInput}"`}</p>
      )}
    </div>
  );
};

export default Search;
