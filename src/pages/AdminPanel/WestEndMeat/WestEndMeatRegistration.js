import React, { useState, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import Table from "../../../components/admin/table";
import DeleteModal from "./DeleteTeam";
import EditModal from './EditTeam';
import { useGetTournamentEventIdMutation } from "../../../features/registerMeatFish/api";
import { ToastContainer } from "react-toastify";
import "../../../assets/css/dashboard.css";
import "react-toastify/dist/ReactToastify.css";

const WestEndMeatRegistration = () => {
  const [deletingRecordId, setDeletingRecordId] = useState(null);
  const [showRecords, setShowRecords] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [GetTournament, { isLoading: isFetching }] = useGetTournamentEventIdMutation();


  // Fetch tournament records
  const getTournamentRecord = async () => {
    try {
      const [response1, response2] = await Promise.all([
        GetTournament(2),
        GetTournament(3),
      ]);

      const tournaments1 = response1?.data?.data?.tournaments || [];
      const tournaments2 = response2?.data?.data?.tournaments || [];

      const combinedTournaments = [...tournaments1, ...tournaments2];

      setShowRecords(combinedTournaments);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getTournamentRecord();
  }, []);

  const showDeleteModalHandler = (id) => {
    setDeletingRecordId(id);
    setShowConfirmDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowConfirmDeleteModal(false);
    setDeletingRecordId(null);
  };

  const columns = [
    "No", "Boat Name", "Captain Name", "Email", "Event Name", "Phone", "City", "State", "Address","Action"
  ];

  const renderRow = (record, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{record.user.boat_name || "N/A"}</td>
      <td>{record.user.name || "N/A"}</td>
      <td>{record.user.email || "N/A"}</td>
      <td>{record.event_detail.title || "N/A"}</td>
      <td>{record.user.phone || "N/A"}</td>
      <td>{record.user.city || "N/A"}</td>
      <td>{record.user.state || "N/A"}</td>
      <td>{record.user.address || "N/A"}</td>
      <td>
        <div className="d-flex gap-2">
            {/* <BiSolidEdit className="fs-4 text-success cursor-pointer" onClick={()=> {
              setShowEditModal(true)
              setSelectedData(record)
              }} /> */}
            <BiSolidTrash onClick={() => showDeleteModalHandler(record.id)} className="fs-4 text-danger cursor-pointer" />
          </div>
    </td>
    </tr>
  );

  return (
    <>
      <ToastContainer />
      <div className="mt-4">
        <Table columns={columns} data={showRecords} renderRow={renderRow} loading={isFetching} />
      </div>
      {/* <EditModal show={showEditModal}  data={selectedData} onClose={()=>setShowEditModal(false)} refreshData={getTournamentRecord} /> */}
      <DeleteModal show={showConfirmDeleteModal} onClose={(handleCloseDeleteModal)} data={deletingRecordId} refreshData={getTournamentRecord}
      />
    </>
  );
};

export default WestEndMeatRegistration;
