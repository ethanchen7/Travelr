import { useSelector } from "react-redux";
import ImageCard from "../ImageCard";
import "./ExplorePage.css";

const ExplorePage = () => {
  const images = useSelector((state) => state.images.images);
  return (
    <div className="body-container">
      <div className="parent-images-container">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        {/* {images?.map((image) => (
        <ImageCard image={image} />
      ))} */}
      </div>
    </div>
  );
};

export default ExplorePage;
