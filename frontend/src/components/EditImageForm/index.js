import { useState } from "react";
import EditImageForm from "./EditImageForm";
import { Modal } from "../../context/Modal";
import "./index.css";

const EditImageModal = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditImageForm image={image} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default EditImageModal;
