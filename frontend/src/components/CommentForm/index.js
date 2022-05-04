import { useState } from "react";
import CommentForm from "./CommentForm";
import { Modal } from "../../context/Modal";
import "./index.css";

const CommentFormModal = ({ imageId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="comment-btn" onClick={() => setShowModal(true)}>
        Add Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm imageId={imageId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default CommentFormModal;
