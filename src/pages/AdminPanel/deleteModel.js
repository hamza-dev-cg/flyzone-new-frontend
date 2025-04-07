import React, { useState } from "react";

const CustomDeleteModal = ({ show, onClose, onConfirm }) => {
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleDelete = async () => {
    setLoading(true); 
    try {
      await onConfirm(true); 
    } catch (error) {
      console.error("Error deleting record", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="custom-modal-backdrop">
      <div className="custom-modal-container">
        <div className="custom-modal-content">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <h5>Are you sure you want to delete this record?</h5>
          <p>This action cannot be undone.</p>
          <div className="modal-actions">
            <button className="btn btn-secondary" onClick={onClose}>
              No
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? (
                <div className="loader"></div> 
              ) : (
                "Yes, Delete"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDeleteModal;
