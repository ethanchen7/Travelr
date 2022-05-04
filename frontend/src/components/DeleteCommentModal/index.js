import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import { Modal } from "../../context/Modal";
import "./index.css";

const DeleteCommentModal = ({ comment }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteConfirmation setShowModal={setShowModal} comment={comment} />
        </Modal>
      )}
    </>
  );
};

export default DeleteCommentModal;
