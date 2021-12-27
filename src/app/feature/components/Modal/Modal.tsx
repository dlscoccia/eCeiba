import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

type ModalType = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalType) => {
  const el = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    // We assume `modalRoot` exists with '!'
    const modalRoot = document.querySelector('#modal-root') as HTMLElement;
    modalRoot!.appendChild(el.current);
    return () => void modalRoot!.removeChild(el.current);
  }, []);

  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="modal-btn">
          X
        </button>
        {children}
      </div>
    </div>,
    el.current
  );
};

export default Modal;
