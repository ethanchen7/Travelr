import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleImage } from "../../store/image";
import "./SingleImagePage.css";

const SingleImagePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const imageId = parseInt(id);
  const image = useSelector((state) => state.images.imageObjects)[imageId];

  useEffect(() => {
    dispatch(getSingleImage(imageId));
  }, [dispatch]);

  return (
    <div className="single-image-body-container">
      <div className="image-container">
        {image && <img src={image.imageUrl} alt="display-img"></img>}
      </div>
      <div className="image-information-container">
        <div className="image-details">
          <div className="profile-container">
            <div className="profile-picture">
              <img src={`/images/linkedinedited.png`} alt="profilepic"></img>
            </div>
            <div className="profile-details">
              <p>@ethanchenn</p>
              <p>TAG STRING</p>
            </div>
          </div>
          <div className="engagement-container">
            <div className="favorite-details">
              <div className="line-break"></div>
              <p>88 people faved this</p>
              <div className="line-break"></div>
            </div>
            <div className="comment-container">
              <div className="comment"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImagePage;
