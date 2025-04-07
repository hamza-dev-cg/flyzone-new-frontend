import React, { useState } from "react";
import axios from "axios";
import Modal from '../../../components/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteTeamModal = ({ show, onClose, data, refreshData }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Handle delete action
  const handleDelete = async () => {
    setIsLoading(true); // Start loading
    const token = await localStorage.getItem("authToken");
    try {
      const response = await axios.delete(
        `https://flyzone.ai/flyzone_laravel/api/fish-weights/${data}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response?.data?.success) {
        toast.success(response?.data?.messages?.[0]);
        setTimeout(() => {
          handleClose();
        }, 1000);
      }
    } catch (error) {
      console.error("Error deleting record:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle modal close
  const handleClose = () => {
    refreshData();
    onClose();
  };

  if (!show) return null;

  return (
    <Modal centered show>
      <div className="py-5">
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <h5>Are you sure you want to delete this record?</h5>
        <p>This action cannot be undone.</p>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={handleClose} disabled={isLoading}>
            Cancel
          </button>
          <button className="btn btn-danger btn-lg" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>

      <ToastContainer />
    </Modal>
  );
};

export default DeleteTeamModal;
