import React, { useState, useEffect } from "react";
import Table from "../../Table";

const ChubClayOpen = ({ chubClayClassic }) => {
  const [tournamentData, setTournamentData] = useState({
    day_1: [],
    day_2: [],
    over_all: [],
  });

  useEffect(() => {
    leaderBoardDataHandler();
  }, [chubClayClassic]);
  const leaderBoardDataHandler = () => {
    const transformedData = {
      day_1: [],
      day_2: [],
      over_all: [],
    };
  
    chubClayClassic.forEach((item) => {
      let day1Score = 0;
      let day2Score = 0;
      let lastCatchTime = null; // Track the last catch time
  
      item.fish_weights.forEach((fish) => {
        const dayKey = `day_${fish.day_number}`;
  
        // Assign points based on fish type
        let points = 0;
        switch (fish.fish_type) {
          case "Blue Marlin":
            points = 500;
            break;
          case "White Marlin":
            points = 200;
            break;
          case "Sail Fish":
            points = 100;
            break;
          default:
            points = 0;
        }
  
        if (transformedData[dayKey]) {
          transformedData[dayKey].unshift({
            id: item.id,
            boat_name: item.boat_name,
            captain_name: item.captain_name,
            hookup: fish.hook_up_time,
            release: fish.catch_up_time,
            species: fish.fish_type,
            point: points,
          });
  
          // Update total score for each day
          const fishCatchTime = new Date(fish.catch_up_time);
          if (fish.day_number === 1) {
            day1Score += points;
          } else if (fish.day_number === 2) {
            day2Score += points;
          }
  
          // Track the last fish catch time for tie-breaking
          if (!lastCatchTime || fishCatchTime > lastCatchTime) {
            lastCatchTime = fishCatchTime;
          }
        }
      });
  
      // Add to overall leaderboard
      if (day1Score > 0 || day2Score > 0) {
        transformedData.over_all.push({
          id: item.id,
          boat_name: item.boat_name,
          captain_name: item.captain_name,
          day_1_total: day1Score,
          day_2_total: day2Score,
          total_score: day1Score + day2Score,
          last_catch_time: lastCatchTime ? lastCatchTime.getTime() : Infinity,  // Track the last catch time
        });
      }
    });
  
    // Sorting overall leaderboard by total score and then by last catch time (for tie-breaking)
    transformedData.over_all.sort((a, b) => {
      if (b.total_score !== a.total_score) {
        return b.total_score - a.total_score; // Higher total score wins
      }
  
      if (a.last_catch_time !== b.last_catch_time) {
        return a.last_catch_time - b.last_catch_time; // Earliest catch time wins
      }
  
      return 0; // If still tied, keep the order unchanged
    });
  
    // Sorting Day 1 fish catches by release time (catch-up time), latest catch will be at the top
    transformedData.day_1.sort((a, b) => new Date(b.release) - new Date(a.release));
  
    // Sorting Day 2 fish catches by release time (catch-up time), latest catch will be at the top
    transformedData.day_2.sort((a, b) => new Date(b.release) - new Date(a.release));  // Corrected sort to match Day 1 logic
  
    setTournamentData(transformedData);
  };
  
  


  const ChubCayDays = [
    { Header: "Boat Name", accessor: "boat_name" },
    { Header: "Captain Name", accessor: "captain_name" },
    {
      Header: "Hook Up Time",
      accessor: "hookup",
      Cell: ({ value }) =>
        value
          ? new Date(value).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          : "N/A",
    },
    {
      Header: "Catch Up Time",
      accessor: "release",
      Cell: ({ value }) =>
        value
          ? new Date(value).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          : "N/A",
    },
    { Header: "Species", accessor: "species" },
    { Header: "Points", accessor: "point"},
  ];

  const ChubCayOverScore = [
    { Header: "Boat Name", accessor: "boat_name" },
    { Header: "Captain Name", accessor: "captain_name" },
    { Header: "Day 1", accessor: "day_1_total" },
    { Header: "Day 2", accessor: "day_2_total" },
    { Header: "Total score", accessor: "total_score"},
  ];

  return (
    <>
      {/* Overall Chub Cay Classic */}
      <div className="table-section">
        <div className="title">Overall Score</div>
        <div className="table-row my-2">
          <Table
            columns={ChubCayOverScore}
            data={tournamentData?.over_all}
            isEditable={false}
            isDeletable={false}
          />
          {tournamentData?.over_all.length > 0 ? (
            <></>
          ) : (
            <div className="text-center my-3">No Data Found</div>
          )}
        </div>
      </div>

      {/* Day 1 */}
      <div className="table-section">
        <div className="title">Day 1 - 28th March 2025</div>
        <div className="table-row my-2">
          <Table
            columns={ChubCayDays}
            data={tournamentData?.day_1}
            isEditable={false}
            isDeletable={false}
          />
          {tournamentData?.day_1.length > 0 ? (
            <></>
          ) : (
            <div className="text-center my-3">No Data Found</div>
          )}
        </div>
      </div>

      {/* Day 2 */}
      <div className="table-section">
        <div className="title">Day 2 - 29th March 2025</div>
        <div className="table-row my-2">
          <Table
            columns={ChubCayDays}
            data={tournamentData?.day_2}
            isEditable={false}
            isDeletable={false}
          />
          {tournamentData?.day_2.length > 0 ? (
            <></>
          ) : (
            <div className="text-center my-3">No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChubClayOpen;
