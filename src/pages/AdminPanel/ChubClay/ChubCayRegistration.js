import React, { useState, useEffect } from "react";
import Table from "../../../components/admin/table";
import Button from '../../../components/Button';
import DeleteModal from "./DeleteTeam";
import AddModal from "./AddModel";
import EditModal from "./EditModel";
import { useGetTournamentMutation } from "../../../features/tournaments/api";
import { ToastContainer, toast } from "react-toastify";
import { BiSolidEdit } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { BsClipboard2Plus } from "react-icons/bs";
import "../../../assets/css/dashboard.css";
import "react-toastify/dist/ReactToastify.css";

const ChubCayRegistration = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [deletingRecordId, setDeletingRecordId] = useState(null);
  const [showRecords, setShowRecords] = useState([]);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [GetTournament, { isLoading: isFetching }] = useGetTournamentMutation();


  // Fetch tournament records
  const getTournamentRecord = async () => {
    try {
      const response = await GetTournament();
      if (response?.data) {
        const filteredData = response.data.filter(
          (tournament) =>
            tournament.tournament_category === "Chub Cay Classic" ||
            tournament.tournament_category === "Chub Cay Open" ||
            tournament.tournament_category === "Chub Cay Invitational"
        );
        setShowRecords(filteredData);
      }
    } catch (err) {
      toast.error("Something went wrong while fetching data.");
    }
  };

  useEffect(() => {
    getTournamentRecord();
  }, []);

  // Open add modal
  const handleCreateRegister = () => {
    setShowModal(true);
  };

  // Close add modal and refresh data
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Open edit modal
  const handleEditClick = (record) => {
    setSelectedData(record);
    setShowEditModal(true);
  };

  // Close edit modal and refresh data
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  // Open delete confirmation modal
  const showDeleteModalHandler = (id) => {
    setDeletingRecordId(id);
    setShowConfirmDeleteModal(true);
  };

  // Close delete modal and reset deletingRecordId
  const handleCloseDeleteModal = () => {
    setShowConfirmDeleteModal(false);
    setDeletingRecordId(null);
  };

  const columns = [
    "No", "Team Name", "Email", "Captain Name", "Boat Name", "Angler Name", "Members", "Actions"
  ];

  const renderRow = (record, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{record.team_name || "N/A"}</td>
      <td>{record.email || "N/A"}</td>
      <td>{record.captain_name || "N/A"}</td>
      <td>{record.boat_name || "N/A"}</td>
      <td>{record.angler_name || "N/A"}</td>
      <td>{record.number_of_team_members || "N/A"}</td>
      <td className="image-pointer">
        <div className="d-flex gap-2">
        <BiSolidEdit onClick={() => handleEditClick(record)} className="fs-4 text-success" />
        <BiSolidTrash onClick={() => showDeleteModalHandler(record.id)} className="fs-4 text-danger" />
          </div>
      </td>
    </tr>
  );

  return (
    <>
      <ToastContainer />
      <div className="d-flex justify-content-end">
      <Button startIcon={<BsClipboard2Plus />} text="Add Tournament" className="d-flex gap-2 align-items-center" onClick={handleCreateRegister} />
      </div>
      

      <div className="mt-4">
        <Table columns={columns} data={showRecords} renderRow={renderRow} loading={isFetching} />
      </div>
      <AddModal show={showModal} onClose={handleCloseModal} refreshData={getTournamentRecord} />
      <EditModal show={showEditModal} onClose={handleCloseEditModal} data={selectedData} refreshData={getTournamentRecord} />
      <DeleteModal show={showConfirmDeleteModal} onClose={handleCloseDeleteModal} data={deletingRecordId} refreshData={getTournamentRecord}
      />
    </>
  );
};

export default ChubCayRegistration;
