import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  return (
    <div className={`modal-overlay `}>
      <div className="modal-container">
        <h3>modal content</h3>
        <buttton className="close-modal-btn">
          <FaTimes />
        </buttton>
      </div>
    </div>
  );
};

export default Modal;
