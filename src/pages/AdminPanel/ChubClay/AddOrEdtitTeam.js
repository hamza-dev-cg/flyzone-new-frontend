import React, { useState } from "react";
import LineSvg from '../../../assets/line.svg'

const AddOrEditTeamModal = ({ show, onClose, onSave, record }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    boatName: "",
    captainName: "",
    anglerName: "",
    teamName: "",
    email: "",
    base: "1",
    noOfTeamMembers: "",
    tournament: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const requestFormData = new FormData();
      requestFormData.append("tournament_category", formData.tournament);
      requestFormData.append("email", formData.email);
      requestFormData.append("boat_name", formData.boatName);
      requestFormData.append("angler_name", formData.anglerName);
      requestFormData.append("captain_name", formData.captainName);
      requestFormData.append("team_name", formData.teamName);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h4 className="textHeading">
          {record === null ? "Registration" : "Edit"} Form
        </h4>
        <div className="line">
          <img src={LineSvg} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Tournament</label>
            <select
              className="form-select custom-select"
              name="tournament"

            >
              <option value="Blue Marline Cove Wahoo Open">
                Blue Marline Cove Wahoo Open
              </option>

            </select>

          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="teamName">Team Name</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                placeholder="Team Name"
              />

            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="xyz@gmail.com"
              />

            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="captainName">Captain Name</label>
              <input
                type="text"
                id="captainName"
                name="captainName"
                placeholder="Captain Name"
              />

            </div>
            <div className="form-group">
              <label htmlFor="boatName">Boat Name</label>
              <input
                type="text"
                id="boatName"
                name="boatName"
                placeholder="Boat Name"
              />

            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="anglerName">Angler Name</label>
              <input
                type="text"
                id="anglerName"
                name="anglerName"
                placeholder="Angler Name"
              />

            </div>
            <div className="form-group">
              <label htmlFor="noOfTeamMembers">No. of Team Members</label>
              <input
                type="text"
                id="noOfTeamMembers"
                name="noOfTeamMembers"
                placeholder="4"
              />
            </div>
          </div>


          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <div className="loader"></div> : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrEditTeamModal;
