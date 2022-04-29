import { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";
import "./index.css";

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="log-in-btn" onClick={() => setShowModal(true)}>
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
