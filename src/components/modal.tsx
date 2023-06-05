import { styled } from "styled-components";

type Props = {
  visible?: boolean;
  onClose?: VoidFunction;
};

const Modal = ({ visible, onClose }: Props) => {
  return (
    <>
      {visible && (
        <ModalWrapper>
          <div className="modal-content">
            <span className="close" onClick={() => onClose && onClose()}>
              &times;
            </span>
            <p>
              If the bottom keyboard is blocked, click the icon to enter full
              screen mode
            </p>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    width: 80%; /* Could be more or less, depending on screen size */
    border-radius: 12px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
