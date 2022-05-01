import { useSelector } from "react-redux";
import UserPageHeader from "../UserPageHeader";
import UserPageNavBar from "../UserPageNavBar";
import ImageCard from "../ImageCard";
import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="user-page-container">
      <UserPageHeader />
      <UserPageNavBar />
      <div className="user-page-body">
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
    </div>
  );
};

export default UserPage;
