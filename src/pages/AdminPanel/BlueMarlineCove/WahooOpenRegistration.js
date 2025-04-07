import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '../../../components/admin/table';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddOrEditTeamModal from "./AddOrEditTeam";
import DeleteTeamModal from "./DeleteTeam";
import "react-toastify/dist/ReactToastify.css";
import "../../../assets/css/dashboard.css";

const WahooOpenRegistration = () => {
  const [loading, setLoading] = useState(true);
  const [showRecords, setShowRecords] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [deletingRecordId, setDeletingRecordId] = useState(null);
  const [editingRecord, setEditingRecord] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = (record) => {
    return;
    // setEditingRecord(record);
    // setIsEditModalOpen(true);
  };
  const onAddClick = (record) => {
    setEditingRecord(null);
    setIsEditModalOpen(true);
  };

  const getTournamentRecord = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://flyzone.ai/flyzone_laravel/api/tournaments",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.data) {
        const filteredData = response.data.filter(
          (tournament) =>
            tournament?.tournament_category === "Blue Marline Cove Wahoo Open"
        );
        setShowRecords(filteredData);
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
    setLoading(false);
  };

  useEffect(() => {
    getTournamentRecord();
  }, []);

  const showDeleteModalHandler = (id) => {
    return;
    setDeletingRecordId(id);
    setShowConfirmDeleteModal(true);
  };

  const handleDeleteConfirmation = async (confirm) => {
    if (!confirm) {
      setShowConfirmDeleteModal(false);
      return;
    }
    try {
      const token = await localStorage.getItem("authToken");
      await axios.delete(
        `https://flyzone.ai/flyzone_laravel/api/tournaments/${deletingRecordId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await getTournamentRecord();
      toast.success("Tournament record deleted successfully");
    } catch (error) {
      toast.error("Something went wrong.");
    }
    setShowConfirmDeleteModal(false);
    setDeletingRecordId(null);
  };
  const columns=['No',"Team Name","Email","Captain Name","Boat Name","Angler Name","No. Team Members","Heaviest 10","Daily Heaviest Fish","Daily Aggregate","Overall Heaviest Fish","Actions"]
    const renderRow=(record,index)=>{
      return(
      <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{record.team_name || "N/A"}</td>
      <td>{record.email || "N/A"}</td>
      <td>{record.captain_name || "N/A"}</td>
      <td>{record.boat_name || "N/A"}</td>
      <td>{record.angler_name || "N/A"}</td>
      <td>{record.number_of_team_members || "N/A"}</td>
      <td>
        <input
          type="checkbox"
          checked={record.heaviest_10 || false}
          className="custom-checkbox"
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={record.daily_heaviest_fish || false}
          className="custom-checkbox"
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={record.daily_aggregate || false}
          className="custom-checkbox"
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={record.overall_heavy_fish || false}
          className="custom-checkbox"
        />
      </td>
      <td className="image-pointer">
        <div className="d-flex gap-2"> 
        <FaRegEdit
          onClick={() => handleEditClick(record)}
          className="fs-3 text-success"
        />
           <RiDeleteBin6Line
          onClick={() => showDeleteModalHandler(record.id)}
          className="fs-3 text-danger"
        />
        </div>
      </td>
    </tr>
    )}
  return (
    <>
      <ToastContainer />
      <div>
        {/* <div className="d-flex justify-content-end">
          <button onClick={() => onAddClick()} className="add-btn" disabled>
            Add
          </button>
        </div> */}
      <Table columns={columns} isLoading={loading} data={showRecords} renderRow={renderRow} />
      </div>
      <AddOrEditTeamModal
        show={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={getTournamentRecord}
        record={editingRecord}
      />
      <DeleteTeamModal
        show={showConfirmDeleteModal}
        onClose={() => setShowConfirmDeleteModal(false)}
        onConfirm={handleDeleteConfirmation}
      />
    </>
  );
};

export default WahooOpenRegistration;
