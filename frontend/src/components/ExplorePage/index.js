import { useSelector } from "react-redux";
import ImageCard from "../ImageCard";
import "./ExplorePage.css";

const ExplorePage = () => {
  // const images = useSelector((state) => state.images.images);
  return (
    <div className="body-container">
      <div className="inner-container">
        <ImageCard imageType={"nature"} />
        <ImageCard imageType={"sport"} />
        <ImageCard imageType={"people"} />
        <ImageCard imageType={"fitness"} />
        <ImageCard imageType={"people"} />
        <ImageCard imageType={"sport"} />
        <ImageCard imageType={"food"} />
        <ImageCard imageType={"travel"} />
        <ImageCard imageType={"cars"} />
        <ImageCard imageType={"sport"} />
        <ImageCard imageType={"art"} />
        <ImageCard imageType={"travel"} />

        {/* {images?.map((image) => (
        <ImageCard image={image} />
      ))} */}
      </div>
    </div>
  );
};

export default ExplorePage;
