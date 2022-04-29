import { useState } from "react";
import SignUpForm from "./SignUpForm";
import { Modal } from "../../context/Modal";
import "./index.css";

const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="sign-up-btn" onClick={() => setShowModal(true)}>
        <span className="sign-up-txt">Sign Up</span>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
