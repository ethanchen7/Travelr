import { useState } from "react";
import EditCommentForm from "./EditCommentForm";
import { Modal } from "../../context/Modal";
// import "./index.css";

const EditCommentModal = ({ comment }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm comment={comment} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default EditCommentModal;
