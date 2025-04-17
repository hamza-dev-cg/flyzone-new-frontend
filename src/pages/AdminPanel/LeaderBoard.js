import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard.css";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage, IsAdminLoggedIn } from "../../utils/helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiDetail } from "react-icons/bi";
import AddRecordModal from "./AddRecord";

const LeaderBoard = () => {
  const [day, setDay] = useState(1);
  const [loading, setLoading] = useState(true);
  const [tournament, setTournament] = useState("Chub Cay Open");
  const [coveChampionshipData, setCoveChampionshiData] = useState(null);
  const [allwahooOpenData, setAllWahooOpenData] = useState([]);
  const [dayWahooOpenData, setDayWahooOpenData] = useState(null);
  const [dayChampionshipData, setChampionshipData] = useState(null);
  const [dayChubCay, setDayChubCay] = useState(null);
  const [dayChubCayOpen, setDayChubCayOpen] = useState(null);
  const [dayChubCayInvitational, setDayChubCayInvitational] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    pageInitialization();
  }, []);

  const pageInitialization = async () => {
    await checkIsUserLoggedIn();
    await getTournamentRecord();
  };

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

      if (response.data) {
        const wahooOpen = { day_1: [], day_2: [] };
        const Championship = { day_1: [], day_2: [] };

        // Create an object to store Chub Cay tournament data dynamically
        const chubCayData = {
          "Chub Cay Classic": [],
          "Chub Cay Open": [],
          "Chub Cay Invitational": [],
        };

        response.data.forEach((record) => {
          if (record.tournament_category === "Blue Marline Cove Wahoo Open") {
            const data = {
              id: record.id,
              email: record.email,
              team_name: record.team_name,
              boat_name: record.boat_name,
              captain_name: record.captain_name,
              fish_weights_id: null,
              fish_weights: [],
            };

            // Create copies for Day 1 and Day 2
            let d1 = { ...data };
            let d2 = { ...data };

            // Iterate through fish_weights and assign based on day_number
            record.fish_weights.forEach((fw) => {
              const day = parseInt(fw.day_number, 10);
              if (day === 1) {
                d1.fish_weights = fw.fish_weight;
                d1.fish_weights_id = fw.id;
              }
              if (day === 2) {
                d2.fish_weights = fw.fish_weight;
                d2.fish_weights_id = fw.id;
              }
            });

            // Push the correct records
            wahooOpen.day_1.push(d1);
            wahooOpen.day_2.push(d2);
          }

          if (record.tournament_category === "Blue Marline Cove Championship") {
            const data = {
              id: record.id,
              email: record.email,
              team_name: record.team_name,
              boat_name: record.boat_name,
              captain_name: record.captain_name,
              fish_weights_id: null,
              fish_weights: [],
            };

            // Create copies for Day 1 and Day 2
            let d1 = { ...data };
            let d2 = { ...data };

            // Iterate through fish_weights and assign based on day_number
            record.fish_weights.forEach((fw) => {
              const day = parseInt(fw.day_number, 10);
              if (day === 1) {
                d1.fish_weights = fw.fish_weight;
                d1.fish_weights_id = fw.id;
              }
              if (day === 2) {
                d2.fish_weights = fw.fish_weight;
                d2.fish_weights_id = fw.id;
              }
            });

            // Push the correct records
            Championship.day_1.push(d1);
            Championship.day_2.push(d2);
          }

          // Handle Chub Cay tournaments dynamically
          else if (chubCayData.hasOwnProperty(record.tournament_category)) {
            chubCayData[record.tournament_category].push({
              id: record.id,
              email: record.email,
              tournament_category: record.tournament_category,
              team_name: record.team_name,
              boat_name: record.boat_name,
              captain_name: record.captain_name,
              fish_weights: record.fish_weights || [],
              fish_weights_id: null,
              day: day,
            });
          }
        });

        // Update state dynamically
        setAllWahooOpenData(wahooOpen);
        setDayWahooOpenData(wahooOpen?.day_1);
        setCoveChampionshiData(Championship);
        setChampionshipData(Championship?.day_1);
        setDayChubCay(chubCayData["Chub Cay Classic"]);
        setDayChubCayOpen(chubCayData["Chub Cay Open"]);
        setDayChubCayInvitational(chubCayData["Chub Cay Invitational"]);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTournamentScoreHanlder = async (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const editTournamentScoreHanlder = (row) => {
    setSelectedRow(row);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDropdownChange = (e) => {
    const value = e.target.options[e.target.selectedIndex].value;
    const name = e.target.name;

    if (name === "day") {
      setDay(value);
      if (tournament === "Blue Marline Cove Wahoo Open") {
        setDayWahooOpenData(allwahooOpenData[`day_${value}`]);
      }
      if (tournament === "Blue Marline Cove Championship") {
        setChampionshipData(coveChampionshipData[`day_${value}`]);
      }
    }
    if (name === "touranment") {
      setTournament(value);
    }
  };

  const tournamentDays = {
    "Blue Marline Cove Wahoo Open": [
      { value: "1", label: "Day 1 - 17th January 2025" },
      { value: "2", label: "Day 2 - 18th January 2025" },
    ],
    "Blue Marline Cove Championship": [
      { value: "1", label: "Day 1 - 14th February 2025" },
      { value: "2", label: "Day 2 - 15th February 2025" },
    ],
  };

  return (
    <>
      <ToastContainer />
      <div>
        {/* Top Header */}
        <div className="header mt-4">
          <div className="header-row">
            <h1>Leaderboard</h1>
          </div>
        </div>
        {/* Body */}
        <div className="content-section">
          <div className="d-flex justify-content-end filter-row w-100 gap-1">
            {tournament === "Blue Marline Cove Wahoo Open" ||
            tournament === "Blue Marline Cove Championship" ? (
              <div className="col-md-auto">
                <select
                  id="dropdown"
                  className="form-select custom-select"
                  onChange={handleDropdownChange}
                  name="day"
                  value={day}
                >
                  {tournamentDays[tournament]?.map((dayOption) => (
                    <option key={dayOption.value} value={dayOption.value}>
                      {dayOption.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="col-md-auto ms-1">
              <select
                id="dropdown"
                className="form-select custom-select"
                onChange={handleDropdownChange}
                name="touranment"
                value={tournament}
              >
                <option value="Chub Cay Open">Chub Cay Open</option>
                <option value="Chub Cay Classic">Chub Cay Classic</option>
                <option value="Chub Cay Invitational">
                  Chub Cay Invitational
                </option>
                <option value="Blue Marline Cove Wahoo Open">
                  Blue Marline Cove Wahoo Open
                </option>
                <option value="Blue Marline Cove Championship">
                  Blue Marline Cove Championship
                </option>
              </select>
            </div>
          </div>

          <div className="leader_board_table_container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Boat Name</th>
                  <th scope="col">Captain Name</th>
                  {tournament === "Blue Marline Cove Wahoo Open" && (
                    <>
                      <th scope="col">Fish Weight 1 (lbs)</th>
                      <th scope="col">Fish Weight 2 (lbs)</th>
                      <th scope="col">Fish Weight 3 (lbs)</th>
                      <th scope="col">Fish Weight 4 (lbs)</th>
                      <th scope="col">Fish Weight 5 (lbs)</th>
                    </>
                  )}
                  {tournament === "Blue Marline Cove Championship" && (
                    <>
                      <th scope="col">Fish Weight 1 (lbs)</th>
                      <th scope="col">Fish Weight 2 (lbs)</th>
                      <th scope="col">Fish Weight 3 (lbs)</th>
                      <th scope="col">Fish Weight 4 (lbs)</th>
                      <th scope="col">Fish Weight 5 (lbs)</th>
                    </>
                  )}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="9" className="text-center  p-4">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {/* Determine the selected tournament's data */}
                    {(tournament === "Blue Marline Cove Wahoo Open"
                      ? dayWahooOpenData
                      : tournament === "Blue Marline Cove Championship"
                      ? dayChampionshipData
                      : tournament === "Chub Cay Classic"
                      ? dayChubCay
                      : tournament === "Chub Cay Open"
                      ? dayChubCayOpen
                      : tournament === "Chub Cay Invitational"
                      ? dayChubCayInvitational
                      : []
                    ).length === 0 ? (
                      <tr>
                        <td colSpan="9" className="text-center  p-4">
                          <strong>No Data Found</strong>
                        </td>
                      </tr>
                    ) : (
                      <>
                        {/* Render Blue Marline Cove Wahoo Open tournament data */}
                        {tournament === "Blue Marline Cove Wahoo Open" &&
                          dayWahooOpenData?.map((record, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{record.boat_name}</td>
                              <td>{record.captain_name}</td>
                              <td>{record.fish_weights[0] || "----"}</td>
                              <td>{record.fish_weights[1] || "----"}</td>
                              <td>{record.fish_weights[2] || "----"}</td>
                              <td>{record.fish_weights[3] || "----"}</td>
                              <td>{record.fish_weights[4] || "----"}</td>
                              <td className="image-pointer">
                                {record.fish_weights.length > 0 ? (
                                  <FaRegEdit
                                    onClick={() =>
                                      editTournamentScoreHanlder(record)
                                    }
                                    className="fs-3 text-success"
                                  />
                                ) : (
                                  <IoIosAddCircleOutline
                                    onClick={() =>
                                      addTournamentScoreHanlder(record)
                                    }
                                    className="fs-3 text-success"
                                  />
                                )}
                              </td>
                            </tr>
                          ))}

                        {tournament === "Blue Marline Cove Championship" &&
                          dayChampionshipData?.map((record, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{record.boat_name}</td>
                              <td>{record.captain_name}</td>
                              <td>{record.fish_weights[0] || "----"}</td>
                              <td>{record.fish_weights[1] || "----"}</td>
                              <td>{record.fish_weights[2] || "----"}</td>
                              <td>{record.fish_weights[3] || "----"}</td>
                              <td>{record.fish_weights[4] || "----"}</td>
                              <td className="image-pointer">
                                {record.fish_weights.length > 0 ? (
                                  <FaRegEdit
                                    onClick={() =>
                                      editTournamentScoreHanlder(record)
                                    }
                                    className="fs-3 text-success"
                                  />
                                ) : (
                                  <IoIosAddCircleOutline
                                    onClick={() =>
                                      addTournamentScoreHanlder(record)
                                    }
                                    className="fs-3 text-success"
                                  />
                                )}
                              </td>
                            </tr>
                          ))}

                        {tournament === "Blue Marline Cove Championship" &&
                          dayChampionshipData?.map((record, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{record.boat_name}</td>
                              <td>{record.captain_name}</td>
                              <td>{record.fish_weights[0] || "----"}</td>
                              <td>{record.fish_weights[1] || "----"}</td>
                              <td>{record.fish_weights[2] || "----"}</td>
                              <td>{record.fish_weights[3] || "----"}</td>
                              <td>{record.fish_weights[4] || "----"}</td>
                              <td className="image-pointer">
                                {record.fish_weights.length > 0 ? (
                                  <FaRegEdit
                                    onClick={() =>
                                      editTournamentScoreHanlder(record)
                                    }
                                    className="fs-3 text-success"
                                  />
                                ) : (
                                  <IoIosAddCircleOutline
                                    onClick={() =>
                                      addTournamentScoreHanlder(record)
                                    }
                                    className="fs-3 text-success"
                                  />
                                )}
                              </td>
                            </tr>
                          ))}

                        {/* Render Chub Cay tournament data */}
                        {(tournament === "Chub Cay Classic"
                          ? dayChubCay
                          : tournament === "Chub Cay Open"
                          ? dayChubCayOpen
                          : tournament === "Chub Cay Invitational"
                          ? dayChubCayInvitational
                          : []
                        ).map((record, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{record.boat_name}</td>
                            <td>{record.captain_name}</td>
                            <td className="image-pointer">
                              <BiDetail
                                onClick={() =>
                                  navigate("/admin-dashboard/detail", {
                                    state: { record },
                                  })
                                }
                                className={`fs-3 ${tournament.includes("Chub") ? "disabled-svg" : ""} `}
                              />
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddRecordModal
        show={isModalOpen}
        day={day}
        boatName={selectedRow?.boat_name}
        captainName={selectedRow?.captain_name}
        selectedRow={selectedRow}
        isEditMode={isEditMode}
        tournamentName={tournament}
        onSave={getTournamentRecord}
        onClose={() => {
          setIsEditMode(false);
          setIsModalOpen(false);
          setSelectedRow(null);
          // await getTournamentRecord();
        }}
      />
    </>
  );
};

export default LeaderBoard;
