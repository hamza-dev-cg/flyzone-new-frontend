import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Tick_Blue_Icon from "../../assets/images/tick-blue-icon.png";
import Line from "../../assets/images/line.png";
import Select from "../../components/Select";
import "../../assets/css/dashboard.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../../components/Table";

const TournamentRegistrationsRecords = () => {
  const [loading, setLoading] = useState(true);
  const [tournament, setTournament] = useState("Chub Cay Open");
  const [showRecords, setShowRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: "Chub Cay Open",
    label: "Chub Cay Open",
  });
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 15;

  const optionsData = [
    { value: "Chub Cay Classic", label: "Chub Cay Classic" },
    { value: "Chub Cay Open", label: "Chub Cay Open" },
    { value: "Chub Cay Invitational", label: "Chub Cay Invitational" },
  ];

  const handlePageClick = (selected) => {
    setPageNumber(selected.selected);
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
        setShowRecords(response?.data);
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
    setLoading(false);
  };

  useEffect(() => {
    getTournamentRecord();
  }, []);

  useEffect(() => {
    const filtered = showRecords.filter(
      (record) => record.tournament_category === tournament
    );

    setFilteredRecords(filtered);
    setPageNumber(0);
  }, [showRecords, tournament]);

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
    setTournament(selected.value);
  };

  const isChubCay = tournament.includes("Chub Cay");
  const RegisterTableHeader = [
    { Header: "No", accessor: "index" },
    { Header: "Team Name", accessor: "team_name" },
    { Header: "Captain Name", accessor: "captain_name" },
    { Header: "Boat Name", accessor: "boat_name" },
    ...(!isChubCay
      ? [
          {
            Header: "Heaviest 10",
            accessor: "heaviest_10",
            Cell: ({ value }) =>
              value ? <img src={Tick_Blue_Icon} alt="✔" /> : <>--</>,
          },
          {
            Header: "Daily Heaviest Fish",
            accessor: "daily_heaviest_fish",
            Cell: ({ value }) =>
              value ? <img src={Tick_Blue_Icon} alt="✔" /> : <>--</>,
          },
          {
            Header: "Daily Aggregate",
            accessor: "daily_aggregate",
            Cell: ({ value }) =>
              value ? <img src={Tick_Blue_Icon} alt="✔" /> : <>--</>,
          },
          {
            Header: "Overall Heaviest Fish",
            accessor: "overall_heavy_fish",
            Cell: ({ value }) =>
              value ? <img src={Tick_Blue_Icon} alt="✔" /> : <>--</>,
          },
        ]
      : []),
  ];

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredRecords
    .slice(startIndex, endIndex)
    .map((item, index) => ({
      ...item,
      index: startIndex + index + 1,
    }));

  return (
    <>
      <ToastContainer />
      <div className="w-100">
        <div className="header layout-space gallery-section">
          <div className="fw-bold text-center">
            <h1>Registered Teams</h1>
            <div className="d-flex justify-content-center">
              <img className="img-line m-0" src={Line} alt="line" />
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-end align-items-center px-4">
          <div className="select-width">
            <Select
              options={optionsData}
              value={selectedOption}
              onChange={handleDropdownChange}
            />
          </div>
        </div>
        <div className="content-section container register-team-page leaderboard-page">
          <div className="container mt-2">
            <h1 className="title fs-4">Registered Teams</h1>

            {loading ? (
              <div className="loader-container">
                  <div className="loader"></div>
                </div>
            ) : filteredRecords?.length > 0 ? (
              <>
                <div className="table-row my-2">
                  <Table
                    columns={RegisterTableHeader}
                    data={currentItems}
                    isEditable={false}
                    isDeletable={false}
                  />
                </div>

                {filteredRecords.length > itemsPerPage && (
                  <ReactPaginate
                    previousLabel={<FaAngleLeft />}
                    nextLabel={<FaAngleRight />}
                    breakLabel={"..."}
                    pageCount={Math.ceil(filteredRecords.length / itemsPerPage)}
                    marginPagesDisplayed={2}
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
                  />
                )}
              </>
            ) : (
              <div className="text-center my-3">No Data Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TournamentRegistrationsRecords;
