import React, { useEffect } from "react";
// Components
import { CloseIconBlack } from "../Icons";
// Styled Imports
import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  MyModal,
} from "./styled";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) {
      document
        .querySelector<HTMLBodyElement>("body")!
        .classList.remove("overflow-hidden");
    } else {
      document
        .querySelector<HTMLBodyElement>("body")!
        .classList.add("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <MyModal>
      <ModalOverlay onClick={onClose} className="modal-overlay" />
      <ModalContent className="modal-content">
        {children}
        <ModalCloseButton className="modal-close" onClick={onClose}>
          <CloseIconBlack />
        </ModalCloseButton>
      </ModalContent>
    </MyModal>
  );
};

export default Modal;
