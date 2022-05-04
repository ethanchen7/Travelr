import { useDispatch } from "react-redux";
import { removeComment } from "../../store/comment";
import "./DeleteConfirmation.css";

const DeleteConfirmation = ({ setShowModal, comment }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeComment(comment.id));
    setShowModal(false);
  };

  return (
    <div className="delete-container">
      <div className="form-header">
        <div className="form-logo">
          <img src="/images/travelrblack.png" alt="logo" />
        </div>
        <div className="form-header-text">
          Are you sure you want to delete your comment?
        </div>
      </div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <button className="cancel-button" onClick={() => setShowModal(false)}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteConfirmation;
