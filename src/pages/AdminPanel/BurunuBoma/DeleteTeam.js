import React from "react";
import { toast } from "react-toastify";
import { useDeleteTournamentMutation } from "../../../features/tournaments/api";
import Modal from '../../../components/Modal';


const DeleteTeamModal = ({ show, onClose, data, refreshData }) => {
  const [deleteTournament, { isLoading }] = useDeleteTournamentMutation();

  // Handle delete action
  const handleDelete = async () => {
    if (isLoading) return; 

    try {
      const response = await deleteTournament(data).unwrap();

      if (response?.success) {
        toast.success(response?.messages?.[0] || "Record deleted successfully!");
        await refreshData();
        handleClose();
      } else {
        toast.error(response?.messages?.[0] || "Failed to delete record.");
      }
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  // Handle modal close
  const handleClose = () => {
    onClose();
  };

  // Don't render modal if `show` is false
  if (!show) return null;

  return (
    <Modal centered show>
      <div className="py-5">
        <button className="modal-close" onClick={handleClose} disabled={isLoading}>
          &times;
        </button>
        <h5>Are you sure you want to delete this record?</h5>
        <p>This action cannot be undone.</p>
        <div className="modal-actions">
          <button className="btn btn-secondary btn-lg" onClick={handleClose} disabled={isLoading}>
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
    </Modal>

  );
};

export default DeleteTeamModal;
