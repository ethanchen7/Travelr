import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import { Modal } from "../../context/Modal";
import "./index.css";

const DeleteCommentModal = ({ comment, image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteConfirmation
            setShowModal={setShowModal}
            comment={comment}
            image={image}
          />
        </Modal>
      )}
    </>
  );
};

export default DeleteCommentModal;
