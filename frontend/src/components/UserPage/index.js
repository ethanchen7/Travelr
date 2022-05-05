import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadImages, loadDetails } from "../../store/profile";
import UserPageHeader from "../UserPageHeader";
import UserPageNavBar from "../UserPageNavBar";
import ImageCard from "../ImageCard";
import UploadFormModal from "../UploadPage";
import "./UserPage.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams();
  const images = useSelector((state) => state.profile.profileImages);
  const imageObjects = Object.values(images);
  const details = useSelector((state) => state.profile.profileDetails);

  if (!sessionUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(loadImages(id))
      .then(() => dispatch(loadDetails(id)))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <div className="user-page-container">
        <UserPageHeader details={details} />
        <UserPageNavBar />
        <div className="user-page-body">
          {imageObjects.length ? (
            <div className="inner-container">
              {imageObjects?.map((img) => (
                <ImageCard key={img.id} image={img} />
              ))}
            </div>
          ) : (
            <div className="empty-photo-container">
              <img src="/images/travelrblack.png" />
              <h1>Oops, looks like you don't have any photos yet.</h1>
              <h3>Upload some of your memories!</h3>
              <UploadFormModal option={"black"} />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default UserPage;
