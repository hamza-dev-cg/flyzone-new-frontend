import React from "react";
import Button from "../../components/Button";
import Modal from "react-bootstrap/Modal";

function Example({
  handleClose,
  handleSave,
  show,
  header,
  footer,
  children,
  centered,
  size,
  headerTitle,
  saveText
}) {
  return (
    <>
      <Modal
        centered={centered}
        size={size ? size : "lg"}
        show={show}
        onHide={handleClose}
      >
        {header && (
          <Modal.Header>
            <Modal.Title>{headerTitle}</Modal.Title>
          </Modal.Header>
        )}

        <Modal.Body>{children}</Modal.Body>
        {footer && (
          <Modal.Footer>
            <Button  text="Close" className="outlined" onClick={handleClose} />
            <Button text={saveText}  onClick={handleSave} />
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default Example;
