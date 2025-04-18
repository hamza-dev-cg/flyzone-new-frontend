import React from "react";
import { chubClayOpen } from "../../../utils/dummyData";
import LeaderboardTable from "../LeaderBoardTable";

const ChubClayOpen = ({ pageType = "full" }) => {
  const getFishPoints = (type) => {
    switch (type) {
      case "Blue Marlin":
        return 500;
      case "white Marlins":
        return 200;
      case "Sail Fish":
        return 100;
      default:
        return 0;
    }
  };

  const transformData = () => {
    const transformedData = {
      day_1: [],
      day_2: [],
      over_all: [],
    };

    chubClayOpen.forEach((item) => {
      let day1Score = 0;
      let day2Score = 0;
      let lastCatchTime = null;

      item.fish_weights.forEach((fish) => {
        const dayKey = `day_${fish.day_number}`;
        const points = getFishPoints(fish.fish_type);
        const fishCatchTime = new Date(fish.catch_up_time);

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

          if (fish.day_number === 1) {
            day1Score += points;
          } else if (fish.day_number === 2) {
            day2Score += points;
          }

          if (!lastCatchTime || fishCatchTime > lastCatchTime) {
            lastCatchTime = fishCatchTime;
          }
        }
      });

      if (day1Score > 0 || day2Score > 0) {
        transformedData.over_all.push({
          id: item.id,
          boat_name: item.boat_name,
          captain_name: item.captain_name,
          day_1_total: day1Score,
          day_2_total: day2Score,
          total_score: day1Score + day2Score,
          last_catch_time: lastCatchTime ? lastCatchTime.getTime() : Infinity,
        });
      }
    });

    // Sort by rules
    transformedData.over_all.sort((a, b) => {
      if (b.total_score !== a.total_score) {
        return b.total_score - a.total_score;
      }
      return a.last_catch_time - b.last_catch_time;
    });

    transformedData.day_1.sort(
      (a, b) => new Date(b.release) - new Date(a.release)
    );
    transformedData.day_2.sort(
      (a, b) => new Date(b.release) - new Date(a.release)
    );

    return transformedData;
  };

  const tournamentData = transformData();

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
    { Header: "Points", accessor: "point" },
  ];

  const ChubCayOverScore = [
    { Header: "Boat Name", accessor: "boat_name" },
    { Header: "Captain Name", accessor: "captain_name" },
    { Header: "Day 1", accessor: "day_1_total" },
    { Header: "Day 2", accessor: "day_2_total" },
    { Header: "Total score", accessor: "total_score" },
  ];

  return (
    <LeaderboardTable
      tabs={[
        { label: "Overall Score", key: "overall" },
        { label: "Day 1 - 28th March 2025", key: "day1" },
        { label: "Day 2 - 29th March 2025", key: "day2" },
      ]}
      columnsMap={{
        overall: ChubCayOverScore,
        day1: ChubCayDays,
        day2: ChubCayDays,
      }}
      dataMap={{
        overall: tournamentData.over_all,
        day1: tournamentData.day_1,
        day2: tournamentData.day_2,
      }}
      pageType={pageType}
    />
  );
};

export default ChubClayOpen;
