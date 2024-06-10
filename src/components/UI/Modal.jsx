import React from 'react';
import Backdrop from './Backdrop';
import { useModal } from '../../context/modal-context';

const Modal = () => {
  const { isVisible, toggleVisibility, modalContent } = useModal();

  if (!isVisible) return null;

  return (
    <Backdrop toggleVisibility={toggleVisibility}>
      <div
        className="bg-white p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {modalContent}
      </div>
    </Backdrop>
  );
};

export default Modal;
