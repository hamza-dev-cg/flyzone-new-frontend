import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard.css";
import DashboardLayout from "../../components/DashboardLayout";
import Eye from "../../assets/eye.svg";
import { Modal, Spinner } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage, IsAdminLoggedIn } from "../../utils/helpers";

const Registration = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleModel = (row) => {
    setShowModal(true);
    setSelectedRow(row);
    console.log(row);
  };

  useEffect(() => {
    checkIsUserLoggedIn();
    getAllEvents();
  }, []);

  const checkIsUserLoggedIn = async () => {
    const tokenValidation = await getTokenFromLocalStorage();
    if (!tokenValidation.token) {
      localStorage.clear();
      navigate("/login");
    }

    const isAdmin = await IsAdminLoggedIn();
    if (!isAdmin) {
      navigate("/");
    }
  };

  const getAllEvents = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        " https://flyzone.ai/flyzone_laravel/api/get/events",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        setEventData(response.data.events);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="main-content">
        {/* Top Header */}
        <div className="header">
          <div className="header-row">
            <h1>Tournament Registration</h1>
          </div>
        </div>

        {/* Body */}
        <div className="content-section">
          {isLoading ? (
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center h-100"
              style={{ height: "100vh" }}
            >
              <div>
                <Spinner
                  animation="border"
                  role="status"
                  style={{ width: "10rem", height: "10rem" }}
                  className="text-primary"
                />
              </div>
            </div>
          ) : (
            <>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Captain Email</th>
                    <th scope="col">Angler Email</th>
                    <th scope="col">Total Crew</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {eventData?.map((row, index) => (
                    <tr key={row.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{row.event_name}</td>
                      <td>{row.captain_email}</td>
                      <td>{row.angler_email}</td>
                      <td>{row.total_crew}</td>
                      <td>${row.total_price}</td>
                      <td>
                        <button type="button" className="btn">
                          <img
                            src={Eye}
                            alt="view"
                            onClick={() => handleModel(row)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-lg"
        centered
        style={{
          maxWidth: "100%",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        {/* <Modal.Body > */}
        {selectedRow && (
          <div className="event-details-modal">
            <h5 className="my-3">
              {selectedRow.event_name === "Both"
                ? "Wohoo Fishing Tournament & Blue Marlin Cove Championship"
                : selectedRow.event_name}
            </h5>
            <div className="p-3 rounded shadow-sm event-des">
              <div className="detail-row mb-3">
                <h6>Boat Details</h6>
                <div className="d-flex flex-row">
                  <p className="label">Name</p>
                  <p className="text">{selectedRow.boat_name}</p>
                </div>
                <div className="d-flex flex-row">
                  <p className="label">Type</p>
                  <p className="text">{selectedRow.boat_type}</p>
                </div>
                <div className="d-flex flex-row">
                  <p className="label">Total Crew</p>
                  <p className="text">{selectedRow.total_crew}</p>
                </div>
              </div>

              <div className="detail-row mb-3">
                <h6>Captain Details</h6>
                <div className="d-flex flex-row">
                  <p className="label">Name</p>
                  <p className="text">{selectedRow.captain_name}</p>
                </div>
                <div className="d-flex flex-row">
                  <p className="label">Email</p>
                  <p className="text">{selectedRow.captain_email}</p>
                </div>
                <div className="d-flex flex-row">
                  <p className="label">Contact</p>
                  <p className="text">{selectedRow.captain_contact}</p>
                </div>
              </div>

              <div className="detail-row mb-3">
                <h6>Angler Details</h6>
                <div className="d-flex flex-row">
                  <p className="label">Name</p>
                  <p className="text">{selectedRow.angler_name}</p>
                </div>
                <div className="d-flex flex-row">
                  <p className="label">Email</p>
                  <p className="text">{selectedRow.angler_email}</p>
                </div>
                <div className="d-flex flex-row">
                  <p className="label">Contact</p>
                  <p className="text">{selectedRow.angler_contact}</p>
                </div>
              </div>

              {/* Tournament Statistics Section */}
              <div className="detail-row mb-3 ">
                <h6>Tournament</h6>
                <div className="d-flex flex-row gap-2">
                  <input
                    type="checkbox"
                    checked={selectedRow.overall_heaviest_10_tournament === "1"}
                    readOnly
                    disabled={
                      selectedRow.overall_heaviest_10_tournament !== "1"
                    }
                    className={`checkbox`}
                  />
                  <p
                    className={`label w-100 ${
                      selectedRow.overall_heaviest_10_tournament !== "1"
                        ? "disabled-text"
                        : ""
                    }`}
                  >
                    Overall Heaviest 10
                  </p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <input
                    type="checkbox"
                    checked={
                      selectedRow.overall_heaviest_10_tournament_per_day === "1"
                    }
                    readOnly
                    disabled={
                      selectedRow.overall_heaviest_10_tournament_per_day !== "1"
                    }
                    className={`checkbox`}
                  />
                  <p
                    className={`label w-100 ${
                      selectedRow.overall_heaviest_10_tournament_per_day !== "1"
                        ? "disabled-text"
                        : ""
                    }`}
                  >
                    Heaviest 10 Per Day
                  </p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <input
                    type="checkbox"
                    checked={selectedRow.daily_aggregate_top_5 === "1"}
                    readOnly
                    disabled={selectedRow.daily_aggregate_top_5 !== "1"}
                    className={`checkbox`}
                  />
                  <p
                    className={`label w-100 ${
                      selectedRow.daily_aggregate_top_5 !== "1"
                        ? "disabled-text"
                        : ""
                    }`}
                  >
                    Daily Aggregate
                  </p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <input
                    type="checkbox"
                    checked={selectedRow.heaviest_fish_overall_wta === "1"}
                    readOnly
                    disabled={selectedRow.heaviest_fish_overall_wta !== "1"}
                    className={`checkbox`}
                  />
                  <p
                    className={`label w-100 ${
                      selectedRow.heaviest_fish_overall_wta !== "1"
                        ? "disabled-text"
                        : ""
                    }`}
                  >
                    Heaviest Fish
                  </p>
                </div>
              </div>

              <div className="detail-row mb-3 border-t pt-2">
                <div className="d-flex flex-row">
                  <p className="label">Total Price</p>
                  <p className="text">${selectedRow.total_price}</p>
                </div>
              </div>
            </div>
            {/* Cancel Button */}
            <div className="text-center mt-4 mb-3">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* </Modal.Body> */}
      </Modal>
    </DashboardLayout>
  );
};

export default Registration;
