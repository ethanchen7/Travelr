import { useState } from "react";
import UploadFormPage from "./UploadFormPage";
import { Modal } from "../../context/Modal";
import "./UploadPage.css";

const UploadFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="upload-btn">
        <i
          className="fa-solid fa-cloud-arrow-up fa-2xl"
          onClick={() => setShowModal(true)}
        ></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadFormPage setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default UploadFormModal;
