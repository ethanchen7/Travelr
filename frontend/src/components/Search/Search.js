import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/image";
import ImageCard from "../ImageCard";

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="body-container">
      <div className="inner-container">
        {searchResults.map((result) => (
          <ImageCard key={result.id} image={result} explorePage={true} />
        ))}
      </div>
    </div>
  );
};

export default Search;
