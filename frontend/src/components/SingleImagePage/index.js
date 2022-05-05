import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getSingleImage } from "../../store/image";
import { getComments } from "../../store/comment";
// import { loadImages, loadDetails } from "../../store/profile";
import { Modal } from "../../context/Modal";
import CommentFormModal from "../CommentForm";
import DeleteCommentModal from "../DeleteCommentModal";
import EditCommentForm from "../EditCommentForm";
import FavoriteButton from "../FavoriteButton";
import "./SingleImagePage.css";
import EditImageModal from "../EditImageForm";
import SingleImageZoom from "../SingleImageZoom";

const SingleImagePage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const imageId = parseInt(id);
  const sessionUser = useSelector((state) => state.session.user);
  const image = useSelector((state) => state.images?.imageObjects)[imageId];
  const commentObjects = useSelector((state) => state.comment.imageComments);
  const comments = Object.values(commentObjects);
  // const profile = useSelector((state) => state.profile.profileImages);

  useEffect(() => {
    dispatch(getSingleImage(imageId))
      .then(() => dispatch(getComments(imageId)))
      .then(() => setIsLoaded(true));
  }, [dispatch, imageId]);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <div className="single-image-body-container">
        <div className="image-container">
          {image.User.id === sessionUser.id ? (
            <>
              <EditImageModal image={image} />
              <DeleteCommentModal image={image} />
            </>
          ) : (
            ""
          )}
          {image && (
            <img
              src={image.imageUrl}
              alt="display-img"
              onClick={() => setShowModal(true)}
            ></img>
          )}
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SingleImageZoom image={image} />
            </Modal>
          )}
        </div>
        <div className="image-information-container">
          <div className="image-details">
            <div className="profile-container">
              <div className="profile-inner-container">
                <div className="profile-picture">
                  <img src={`${image.imageUrl}`} alt="profilepic"></img>
                </div>
                <div className="profile-details">
                  <NavLink
                    to={`/users/${image.User.id}`}
                  >{`@${image.User.username}`}</NavLink>
                  <p>{`${image.tags[0].toUpperCase()}`}</p>
                </div>
              </div>
              <div className="picture-tags">
                {image.tags.map((tag) => (
                  <button key={`${tag}`}>{`${tag.toUpperCase()}`}</button>
                ))}
              </div>
            </div>

            <div className="engagement-container">
              <div className="favorite-details">
                <FavoriteButton image={image} small={true} />
                <span>{`${image.favoriteCount} people faved this`}</span>
              </div>
              <div className="comment-container">
                {comments.map((comment) => (
                  <div className="comment" key={`${comment.id}`}>
                    <div className="comment-details">
                      <NavLink
                        to={`/users/${comment.User.id}`}
                      >{`@${comment.User.username}`}</NavLink>
                      <p>{comment.text}</p>
                    </div>
                    {comment.User.id === sessionUser.id ? (
                      <div className="comment-icons">
                        <EditCommentForm comment={comment} />
                        <DeleteCommentModal comment={comment} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
              <div className="add-comment-btn">
                <CommentFormModal imageId={imageId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleImagePage;
