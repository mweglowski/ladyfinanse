import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isVisible, setModalVisibility] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleVisibility = (content = null) => {
    setModalVisibility(prevVisibility => !prevVisibility);
    setModalContent(content);
  };

  return (
    <ModalContext.Provider value={{ toggleVisibility, isVisible, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
