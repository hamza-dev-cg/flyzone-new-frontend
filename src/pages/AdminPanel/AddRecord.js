import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from '../../components/Modal';

const AddRecordModal = ({
  show,
  day,
  boatName,
  captainName,
  selectedRow,
  isEditMode,
  tournamentName,
  onClose,
  onSave,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    tournamentId: 0,
    fishWeightId: 0,
    fishWeight: [],
  });

  useEffect(() => {
    if (selectedRow) {
      const initialFishWeights =
        isEditMode && Array.isArray(selectedRow?.fish_weights)
          ? selectedRow.fish_weights
          : Array(5).fill("");

      setFormData({
        tournamentId: selectedRow.id,
        fishWeightId: isEditMode ? selectedRow.fish_weights_id : 0,
        fishWeight: initialFishWeights,
      });
    }
  }, [selectedRow]);

  const addFishWeight = (e, idx) => {
    const { value } = e.target;
    const updatedFishWeight = [...formData.fishWeight];
    updatedFishWeight[idx] = value;
    setFormData({ ...formData, fishWeight: updatedFishWeight });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = await localStorage.getItem("authToken");

    if (!isEditMode) {
      try {
        const requestFormData = new FormData();
        requestFormData.append("tournament_id", formData.tournamentId);
        requestFormData.append("day_number", day);
        requestFormData.append("fish_weight", formData.fishWeight);
        const response = await axios.post(
          "https://flyzone.ai/flyzone_laravel/api/create-fish-weight",
          requestFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status) {
          toast.success("Tournament record saved successfully");
        }

        setFormData({
          id: 0,
          fishWeight: Array(5).fill(""),
        });
        onClose();
      } catch (err) {
        toast.error("Something went wrong.");
      }
    }

    if (isEditMode) {
      try {
        const requestFormData = new FormData();
        requestFormData.append("id", formData.fishWeightId);
        requestFormData.append("day_number", day);
        requestFormData.append("fish_weight", formData.fishWeight);

        const response = await axios.post(
          "https://flyzone.ai/flyzone_laravel/api/update-fish-weight",
          requestFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status) {
          toast.success("Tournament record updated successfully");
        }

        setFormData({
          id: 0,
          fishWeight: Array(5).fill(""),
        });
        onClose();
        onSave();
      } catch (err) {
        toast.error("Something went wrong.");
      }
    }

    setLoading(false);
  };

  if (!show) return null;

  return (
    <Modal >
    <div className="modal-backdrop">
      <div className="modal-container2">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h4 className="textHeading">
          {isEditMode ? "Edit" : "Add"} Fish Weights
        </h4>
        <div className="line">
          <svg
            width="178"
            height="14"
            viewBox="0 0 178 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.31616 11.7875C27.5708 4.67133 97.6734 -5.29126 176.047 11.7875"
              stroke="url(#paint0_linear_965_126)"
              stroke-width="2.90155"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_965_126"
                x1="89.1811"
                y1="11.5086"
                x2="89.1811"
                y2="2.35742"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00B7FE" />
                <stop offset="1" stop-color="#5823FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="day">Day</label>
            <input type="number" id="day" name="day" value={day} disabled />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="boatName">Boat Name</label>
            <input
              type="text"
              id="boatName"
              name="boatName"
              value={boatName || ""}
              disabled
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="captainName">Captain Name</label>
            <input
              type="text"
              id="captainName"
              name="captainName"
              value={captainName || ""}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Fish Weight (lbs):</label>
            {[...Array(5)].map((_, idx) => (
              <input
                key={idx}
                type="number"
                className="form-control mb-2"
                placeholder={`Fish Weight (lbs) ${idx + 1}`}
                value={formData.fishWeight[idx] || ""}
                onChange={(e) => addFishWeight(e, idx)}
              />
            ))}
            {/* {errors.fishWeight && (
              <span className="error-text">{errors.fishWeight}</span>
            )} */}
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <div className="loader"></div> : "Submit"}
          </button>
        </form>
      </div>
    </div>
    </Modal>
  );
};

export default AddRecordModal;
