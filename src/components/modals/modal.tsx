import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  ContainerModal,
  HeaderModal,
  Row,
  BodyModal
} from "@/styles/Modal/styles.modals";
import { FiX } from "react-icons/fi";

interface Props {
  show: any;
  onClose: () => void;
  children: any;
  color?: string;
  small?: boolean
}

const Modal = ({ show, onClose, children, color, small }: Props) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <ContainerModal>
      <Row color={color} small={small}>
        <HeaderModal>
          <a href="#" onClick={handleCloseClick}>
            <FiX />
          </a>
        </HeaderModal>
        <BodyModal>{children}</BodyModal>
      </Row>
    </ContainerModal>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
