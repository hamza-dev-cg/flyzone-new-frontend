import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({
  handleClose,
  handleSave,
  show,
  header,
  footer,
  children,
  centered,
  size
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
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        )}

        <Modal.Body>{children}</Modal.Body>
        {footer && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default Example;
