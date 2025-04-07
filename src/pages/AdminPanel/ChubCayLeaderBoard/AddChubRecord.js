import React, { useState, useEffect } from "react";
import axios from "axios";
import TimezoneSelect from "react-timezone-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../../components/Modal";

const AddChubCayRecordModal = ({
  show,
  day,
  boatName,
  captainName,
  tournament_id,
  selectedRow,
  isEditMode,
  onClose,
  onSave,
}) => {
  const [loading, setLoading] = useState(false);

  const getCurrentESTDateTime = () => {
    const now = new Date();

    const estTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);

    const [month, day, year, hour, minute] = estTime.match(/\d+/g);

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
  };

  const [formData, setFormData] = useState({
    fish_type: "N/A",
    hook_up_time: getCurrentESTDateTime(),
    catch_up_time: "",
  });
  useEffect(() => {
    let interval;
  
    if (show && !isEditMode) { 
      interval = setInterval(() => {
        setFormData((prev) => ({
          ...prev,
          hook_up_time: getCurrentESTDateTime(),
        }));
      }, 10000);
    }
  
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [show, isEditMode]);  
  

  useEffect(() => {
    if (isEditMode && selectedRow) {
      setFormData({
        tournament_id: tournament_id,
        fishWeightId: selectedRow.fish_weights_id || 0,
        fish_type: selectedRow.fish_type || "N/A",
        hook_up_time: selectedRow.hook_up_time,
        catch_up_time: selectedRow.catch_up_time || "",
      });
    } else {
      setFormData({
        fish_type: "N/A",
        hook_up_time: getCurrentESTDateTime(),
        catch_up_time: "",
      });
    }
  }, [selectedRow, isEditMode, show]); 
  


  const handleDateTimeChange = (e) => {
    const { name, value } = e.target;
  
    if (value) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = await localStorage.getItem("authToken");
    const requestFormData = new FormData();
    requestFormData.append("tournament_id", tournament_id);
    requestFormData.append("fish_type", formData.fish_type);
    requestFormData.append("hook_up_time", formData.hook_up_time);
    requestFormData.append("catch_up_time", formData.catch_up_time);
    requestFormData.append("day_number", day);

    try {
      let response;
      if (!isEditMode) {
        response = await axios.post(
          "https://flyzone.ai/flyzone_laravel/api/create-fish-weight",
          requestFormData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response?.data?.success) {
          toast.success(response?.data?.messages[0]);
          onSave();
          setTimeout(() => {
            onClose();

          }, 1000);
        }
      } else {
        requestFormData.append("id", selectedRow?.id);
        response = await axios.post(
          "https://flyzone.ai/flyzone_laravel/api/update-fish-weight",
          requestFormData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response?.data?.success) {
          toast.success(response?.data?.messages[0]);
          onSave();
          setTimeout(() => {
            onClose();

          }, 1000);
        }
      }
      // setFormData({ fish_type: "", catch_up_time: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <Modal centered show>
      <div className="py-5">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h4 className="textHeading">{isEditMode ? "Edit" : "Add"} Fish Types</h4>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label>Day</label>
            <input type="number" value={day} disabled />
          </div>

          <div className="form-group mb-4">
            <label>Boat Name</label>
            <input type="text" value={boatName || ""} disabled />
          </div>

          <div className="form-group mb-4">
            <label>Captain Name</label>
            <input type="text" value={captainName || ""} disabled />
          </div>

          <div className="form-group mb-4">
            <label className="block text-gray-700 font-medium mb-2">Fish Type</label>
            <select
              name="fish_type"
              value={formData.fish_type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg  bg-white text-gray-700"
            >
              <option value="N/A">Select Fish Type</option>
              <option value="Blue Marlin">Blue Marlin</option>
              <option value="White Marlin">White Marlin</option>
              <option value="Sail Fish">Sail Fish</option>
            </select>
          </div>


          <div className="form-group mb-4">
            <label>Hook Up Time</label>
            <input
              type="datetime-local"
              name="hook_up_time"
              value={formData.hook_up_time}
              onChange={handleDateTimeChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div className="form-group mb-4">
            <label>Catch Up Time</label>
            <input
              type="datetime-local"
              name="catch_up_time"
              value={formData.catch_up_time}
              onChange={handleDateTimeChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>


          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <div className="loader"></div> : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </Modal>
  );
};

export default AddChubCayRecordModal;
