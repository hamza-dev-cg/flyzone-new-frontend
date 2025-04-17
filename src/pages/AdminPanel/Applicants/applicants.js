import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Table from '../../../components/admin/table';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import "react-toastify/dist/ReactToastify.css";
import "../../../assets/css/pagination.css";
import {ApplicantsData} from '../../../utils/dummyData'

const Applicants = () => {
  const [showRecords, setShowRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const recordsPerPage = 10;
  const navigate = useNavigate();

  // Fetch tournament data
  // const getTournamentRecord = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       "https://flyzone.ai/flyzone_laravel/api/reg-tournaments",
  //       { headers: { "Content-Type": "application/json" } }
  //     );

  //     if (response?.data?.data?.tournaments) {
  //       const filteredParticipants = response.data.data.tournaments.filter(
  //         (p) => p.chub_cay_classic || p.chub_cay_invitational || p.chub_cay_open
  //       );
  //       setShowRecords(filteredParticipants);
  //       setLoading(false);

  //       if (currentPage * recordsPerPage >= filteredParticipants.length) {
  //         setCurrentPage(0);
  //       }
  //     }
  //   } catch (err) {
  //     toast.error("Something went wrong.");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getTournamentRecord();
  // }, []);

  // Pagination Logic
  const filteredParticipants = ApplicantsData[0]?.data?.tournaments.filter( (p) => p.chub_cay_classic || p.chub_cay_invitational || p.chub_cay_open);
  const offset = currentPage * recordsPerPage;
  const currentRecords = filteredParticipants.slice(offset, offset + recordsPerPage);
  const totalPages = Math.ceil(filteredParticipants.length / recordsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const columns = ["No", "Name", "Email", "Chub Cay Classic", "Chub Cay Open", "Chub Cay Invitational"];

  const renderRow = (applicant, index) => (
    <tr key={index}>
      <td>{offset + index + 1}</td>
      <td>{applicant.name}</td>
      <td>{applicant.email}</td>
      <td>{applicant.chub_cay_classic ? "Yes" : "No"}</td>
      <td>{applicant.chub_cay_open ? "Yes" : "No"}</td>
      <td>{applicant.chub_cay_invitational ? "Yes" : "No"}</td>
    </tr>
  );
  console.log(ApplicantsData,"ApplicantsData")

  return (
    <>
      <ToastContainer />
      <div>
        {/* Top Header */}
        <div className="header mb-3 text-white rounded">
          <div className="header-row">
            <h1 className="text-center">Applicants</h1>
          </div>
        </div>

        {/* Table with Paginated Data */}
        <Table columns={columns} data={currentRecords} renderRow={renderRow} loading={loading} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container mt-3 d-flex justify-content-end">
            <ReactPaginate
              previousLabel={<FaAngleLeft />}
              nextLabel={<FaAngleRight />}
              breakLabel={"..."}
              pageCount={totalPages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              forcePage={currentPage} // Keep UI in sync with state
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Applicants;
