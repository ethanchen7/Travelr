import { useState } from "react";
import UploadFormPage from "./UploadFormPage";
import { Modal } from "../../context/Modal";
import "./UploadPage.css";

const UploadFormModal = ({ option }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={`${option ? "no-back" : "upload-btn"}`}>
        <i
          className={`fa-solid fa-cloud-arrow-up fa-2xl ${
            option ? option : ""
          }`}
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
