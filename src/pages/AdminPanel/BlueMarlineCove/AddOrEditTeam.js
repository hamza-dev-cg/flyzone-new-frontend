import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AddOrEditTeamModal = ({ show, onClose, onSave, record }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    boatName: "",
    captainName: "",
    anglerName: "",
    teamName: "",
    email: "",
    base: "1",
    noOfTeamMembers: "",
    tournament: "",
    checkFields: {
      field1: false,
      field2: false,
      field3: false,
      field4: false,
    },
  });

  useEffect(() => {
    if (record) {
      setFormData({
        boatName: record.boat_name,
        email: record.email,
        teamName: record.team_name,
        captainName: record.captain_name,
        anglerName: record.angler_name,
        tournament: record.tournament_category || "",
        noOfTeamMembers: record.number_of_team_members || "",
        checkFields: {
          field1: record.heaviest_10,
          field2: record.daily_heaviest_fish,
          field3: record.daily_aggregate,
          field4: record.overall_heavy_fish,
        },
      });
    } else {
      setFormData({
        boatName: "",
        captainName: "",
        anglerName: "",
        teamName: "",
        email: "",
        base: "1",
        tournament: "",
        noOfTeamMembers: "",
        checkFields: {
          field1: false,
          field2: false,
          field3: false,
          field4: false,
        },
      });
    }
  }, [record, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      checkFields: {
        ...prevFormData.checkFields,
        [name]: checked,
      },
    }));
  };

  const checkFormValidation = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.boatName || formData.boatName.trim() === "") {
      newErrors.boatName = "Boat Name is required";
      isValid = false;
    }
    if (!formData.teamName || formData.teamName.trim() === "") {
      newErrors.teamName = "Team Name is required";
      isValid = false;
    }
    if (!formData.anglerName || formData.anglerName.trim() === "") {
      newErrors.anglerName = "Angler Name is required";
      isValid = false;
    }
    if (!formData.captainName || formData.captainName.trim() === "") {
      newErrors.captainName = "Captain Name is required";
      isValid = false;
    }
    if (!formData.tournament) {
      newErrors.tournament = "Tournament is required";
      isValid = false;
    }
    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkFormValidation()) {
      return;
    }
    setLoading(true);
    try {
      const token = await localStorage.getItem("authToken");
      const requestFormData = new FormData();
      requestFormData.append("tournament_category", formData.tournament);
      requestFormData.append("email", formData.email);
      requestFormData.append("boat_name", formData.boatName);
      requestFormData.append("angler_name", formData.anglerName);
      requestFormData.append("captain_name", formData.captainName);
      requestFormData.append("team_name", formData.teamName);
      requestFormData.append(
        "number_of_team_members",
        formData.noOfTeamMembers
      );
      requestFormData.append(
        "heaviest_10",
        formData.checkFields.field1 ? "1" : "0"
      );
      requestFormData.append(
        "daily_heaviest_fish",
        formData.checkFields.field2 ? "1" : "0"
      );
      requestFormData.append(
        "daily_aggregate",
        formData.checkFields.field3 ? "1" : "0"
      );
      requestFormData.append(
        "overall_heavy_fish",
        formData.checkFields.field4 ? "1" : "0"
      );
      requestFormData.append("id", record?.id);

      if (!record) {
        const response = await axios.post(
          "https://flyzone.ai/flyzone_laravel/api/create-tournament",
          requestFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const success = response?.data?.success;
        if (success) {
          toast.success(response?.data?.messages[0]);
          onClose();
          onSave();

          setFormData({
            boatName: "",
            captainName: "",
            email: "",
            anglerName: "",
            tournament: "",
            noOfTeamMembers: "",
            checkFields: {
              field1: false,
              field2: false,
              field3: false,
              field4: false,
            },
          });
        } else {
          toast.error(response?.data?.messages[0]);
        }
      } else {
        const response = await axios.post(
          `https://flyzone.ai/flyzone_laravel/api/update-tournament`,
          requestFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const success = response?.data?.success;
        if (success) {
          toast.success(response?.data?.messages[0]);
          onClose();
          onSave();
          setFormData({
            boatName: "",
            captainName: "",
            email: "",
            anglerName: "",
            tournament: "",
            noOfTeamMembers: "",
            checkFields: {
              field1: false,
              field2: false,
              field3: false,
              field4: false,
            },
          });
        } else {
          toast.error(response?.data?.messages[0]);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
    setLoading(false);
  };

  if (!show) return null;
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
          <div className="form-group mb-3">
            <label>Tournamen</label>
            <select
              className="form-select custom-select"
              name="tournament"
              value={formData.tournament}
              onChange={handleChange}
            >
              <option value="">Select the Tournament</option>
              <option value="Blue Marline Cove Wahoo Open">
                Blue Marline Cove Wahoo Open
              </option>
              <option value="Blue Marline Cove Championship">
                Blue Marline Cove Championship
              </option>
            </select>
            {errors.tournament && (
              <span className="error-text">{errors.tournament}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="teamName">Team Name</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                placeholder="Team Name"
              />
              {errors.teamName && (
                <span className="error-text">{errors.teamName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="xyz@gmail.com"
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="captainName">Captain Name</label>
              <input
                type="text"
                id="captainName"
                name="captainName"
                value={formData.captainName}
                onChange={handleChange}
                placeholder="Captain Name"
              />
              {errors.captainName && (
                <span className="error-text">{errors.captainName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="boatName">Boat Name</label>
              <input
                type="text"
                id="boatName"
                name="boatName"
                value={formData.boatName}
                onChange={handleChange}
                placeholder="Boat Name"
              />
              {errors.boatName && (
                <span className="error-text">{errors.boatName}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="anglerName">Angler Name</label>
              <input
                type="text"
                id="anglerName"
                name="anglerName"
                value={formData.anglerName}
                onChange={handleChange}
                placeholder="Angler Name"
              />
              {errors.anglerName && (
                <span className="error-text">{errors.anglerName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="noOfTeamMembers">No. of Team Members</label>
              <input
                type="text"
                id="noOfTeamMembers"
                name="noOfTeamMembers"
                value={formData.noOfTeamMembers}
                onChange={handleChange}
                placeholder="Enter Number"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="checkbox-group">
              <div class="checkbox-item">
                <div class="option-text">
                  <label>Heaviest 10</label>
                  <p className="para">
                    Overall Heaviest 10 of the Tournament 50%/30%/20% Split
                  </p>
                </div>
                <div className="right-align">
                  <input
                    type="checkbox"
                    name="field1"
                    onChange={handleCheckboxChange}
                    checked={formData.checkFields.field1}
                  />
                  <span className="amount">$3,000</span>
                </div>
              </div>
              <div class="checkbox-item">
                <div class="option-text">
                  <label>Daily Heaviest Fish</label>
                  <p className="para">
                    Daily Heaviest Fish WTA Heaviest Fish of Each Day Winner
                    Take All
                  </p>
                </div>
                <div className="right-align">
                  <input
                    type="checkbox"
                    name="field2"
                    onChange={handleCheckboxChange}
                    checked={formData.checkFields.field2}
                  />
                  <span className="amount">$3,000</span>
                </div>
              </div>
              <div class="checkbox-item">
                <div class="option-text">
                  <label>Daily Aggregate</label>
                  <p className="para">
                    Daily Aggregate Top 5 $1500/day for 1st & 2nd. 60%/40% split
                  </p>
                </div>
                <div className="right-align">
                  <input
                    type="checkbox"
                    name="field3"
                    onChange={handleCheckboxChange}
                    checked={formData.checkFields.field3}
                  />
                  <span className="amount">$3,000</span>
                </div>
              </div>
              <div class="checkbox-item">
                <div class="option-text">
                  <label>Overall Heaviest Fish</label>
                  <p className="para">
                    Heaviest Fish Overall WTA Heaviest Fish of the Tournament
                    Winner Take All
                  </p>
                </div>
                <div className="right-align">
                  <input
                    type="checkbox"
                    name="field4"
                    onChange={handleCheckboxChange}
                    checked={formData.checkFields.field4}
                  />
                  <span className="amount">$3,000</span>
                </div>
              </div>
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
