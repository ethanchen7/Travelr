import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeComment } from "../../store/comment";
import { removeImage } from "../../store/profile";
import "./DeleteConfirmation.css";

const DeleteConfirmation = ({ setShowModal, comment, image }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCommentDelete = () => {
    dispatch(removeComment(comment.id));
    setShowModal(false);
  };

  const handleImageDelete = () => {
    dispatch(removeImage(image.id));
    setShowModal(false);
    history.push(`/users/${image.User.id}`);
  };

  return (
    <div className="delete-container">
      <div className="form-header">
        <div className="form-logo">
          <img src="/images/travelrblack.png" alt="logo" />
        </div>
        <div className="form-header-text">
          {image
            ? "Are you sure you want to delete your image?"
            : "Are you sure you want to delete your comment?"}
        </div>
      </div>
      <button
        className="delete-button"
        onClick={image ? handleImageDelete : handleCommentDelete}
      >
        Delete
      </button>
      <button className="cancel-button" onClick={() => setShowModal(false)}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteConfirmation;
