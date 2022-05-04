import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleImage } from "../../store/image";
import { getComments } from "../../store/comment";
import "./SingleImagePage.css";

const SingleImagePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const imageId = parseInt(id);
  const sessionUser = useSelector((state) => state.session.user);
  const image = useSelector((state) => state.images.imageObjects)[imageId];
  const commentObjects = useSelector((state) => state.comment.imageComments);
  const comments = Object.values(commentObjects);

  useEffect(() => {
    dispatch(getSingleImage(imageId));
    dispatch(getComments(imageId));
  }, [dispatch]);
  console.log(comments);
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
              {comments?.map((comment) => (
                <div className="comment" key={`${comment.id}`}>
                  <p>{`@${comment.User.username}`}</p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImagePage;
