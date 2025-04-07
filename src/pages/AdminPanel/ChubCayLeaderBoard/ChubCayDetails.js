import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./leaderboardDeleteTeam";
import { useLocation } from "react-router-dom";
import AddChubCayRecordModal from "./AddChubRecord";
import Table from "../../../components/admin/table";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";



const ChubCayDatails = ({ }) => {
  const [isChubModalOpen, setIsChubModalOpen] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [deletingRecordId, setDeletingRecordId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const row = location.state?.record;
  const [touranmentData, setTournamentData] = useState(row)
  const [selectedRow, setSelectedRow] = useState(row?.id);
  const [selectedDay, setSelectedDay] = useState(1);

  const [data, setData] = useState(null);
  const [fishes, setFishes] = useState(row?.fish_weights || []);
  const columns = [
    "No", "Boat Name", "Fish Type", "Catch Up Time", "Hook Up Time", "Day Number", "Edit", "Delete"
  ];
  const addChubCay = async () => {
    setIsChubModalOpen(true);
    setIsEditMode(false);
  };

  // Open edit modal
  const handleEditClick = (record) => {
    setIsChubModalOpen(true);
    setIsEditMode(true);
    setData(record)
  };
  // Open delete confirmation modal
  const showDeleteModalHandler = (id) => {
    setDeletingRecordId(id);
    setShowConfirmDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowConfirmDeleteModal(false);
    setDeletingRecordId(null);
  };


  const handleData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://flyzone.ai/flyzone_laravel/api/tournaments/${selectedRow}`);
      if (response?.data.length > 0) {
        const filteredFishWeights = response.data[0].fish_weights.filter(
          (fish) => fish.day_number === selectedDay
        );
        setFishes(filteredFishWeights);
        setLoading(false)
      }

    } catch (error) {
      console.error("Error fetching record:", error);
    }
  };

  useEffect(() => {
    handleData()

  }, [selectedRow, selectedDay])


  const renderRow = (record, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{row?.boat_name || "N/A"}</td>
      <td>{record?.fish_type || "N/A"}</td>
      <td>{record?.catch_up_time || "N/A"}</td>
      <td>{record?.hook_up_time || "N/A"}</td>
      <td>{record?.day_number || "N/A"}</td>
      <td className="image-pointer">
        <FaRegEdit onClick={() => handleEditClick(record)} className="fs-3 text-success" />
      </td>
      <td className="image-pointer">
        <RiDeleteBin6Line onClick={() => showDeleteModalHandler(record.id)} className="fs-3 text-danger" />
      </td>
    </tr>
  );
  const tournamentDays = {
    "Chub Cay Classic": [
      { value: "1", label: "Day 1 - 14th March 2025" },
      { value: "2", label: "Day 2 - 15th March 2025" },
    ],
    "Chub Cay Open": [
      { value: "1", label: "Day 1 - 28th March 2025" },
      { value: "2", label: "Day 2 - 29th March 2025" },
    ],
    "Chub Cay Invitational": [
      { value: "1", label: "Day 1 - 12th April 2025" },
      { value: "2", label: "Day 2 - 13th April 2025" },
    ],
  };


  return (
    <>
      <div className=" content-section">
        <div className="header-row">
          <h1>{touranmentData?.tournament_category} Fish Types </h1>
        </div>


        <div className="d-flex justify-content-end mt-4 gap-4">
          <div>
            <select
              id="dropdown"
              className="form-select custom-select"
              name="day"
              value={selectedDay}
              onChange={(e) => setSelectedDay(parseInt(e.target.value, 10))}
            >
              {touranmentData?.tournament_category &&
                tournamentDays[touranmentData?.tournament_category]?.map((day) => (
                  <option key={day.value} value={day.value}>
                    {day.label}
                  </option>
                ))}
            </select>

          </div>
          <button onClick={() => addChubCay()} className="add-btn">Add Fish Type</button>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={fishes} renderRow={renderRow} isLoading={loading} />
        </div>
      </div>

      <AddChubCayRecordModal
        show={isChubModalOpen}
        day={selectedDay}
        boatName={touranmentData?.boat_name}
        captainName={touranmentData?.captain_name}
        tournament_id={touranmentData?.id}
        selectedRow={data}
        isEditMode={isEditMode}
        onSave={handleData}
        onClose={() => {
          setIsEditMode(false);
          setIsChubModalOpen(false);
        }}
      />
      <DeleteModal
        show={showConfirmDeleteModal}
        onClose={handleCloseDeleteModal}
        data={deletingRecordId}
        refreshData={handleData}
      />
      <ToastContainer />
    </>

  );
};

export default ChubCayDatails;
