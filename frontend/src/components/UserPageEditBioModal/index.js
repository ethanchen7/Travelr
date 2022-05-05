import { useState } from "react";
import EditBioForm from "./EditBioForm";
import { Modal } from "../../context/Modal";
// import "./index.css";

const EditBioModal = ({ details }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBioForm details={details} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default EditBioModal;
