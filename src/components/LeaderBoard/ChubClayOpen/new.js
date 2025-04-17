import React, { useState, useEffect } from "react";
import LeaderboardTable from "../LeaderBoardTable"; // Adjust path
import Avatar from "react-avatar";

const ChubClayClassicLeaderBoard = ({ chubClayClassic }) => {
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
      let lastCatchTime = null;

      item.fish_weights.forEach((fish) => {
        const dayKey = `day_${fish.day_number}`;
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
            profile_image: <Avatar name={item.boat_name} size="35" round />,
            user_detail: item.boat_name,
          });

          const fishCatchTime = new Date(fish.catch_up_time);
          if (fish.day_number === 1) day1Score += points;
          else if (fish.day_number === 2) day2Score += points;

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
          profile_image: <Avatar name={item.boat_name} size="35" round />,
          user_detail: item.boat_name,
        });
      }
    });

    transformedData.over_all.sort((a, b) => {
      if (b.total_score !== a.total_score) return b.total_score - a.total_score;
      return a.last_catch_time - b.last_catch_time;
    });

    transformedData.day_1.sort(
      (a, b) => new Date(b.release) - new Date(a.release)
    );
    transformedData.day_2.sort(
      (a, b) => new Date(b.release) - new Date(a.release)
    );

    setTournamentData(transformedData);
  };

  const ProfileColumn = { Header: "Profile", accessor: "profile_image" };
  const UserDetailColumn = { Header: "User", accessor: "user_detail" };

  const ChubCayDays = [
    ProfileColumn,
    UserDetailColumn,
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
    ProfileColumn,
    UserDetailColumn,
    { Header: "Boat Name", accessor: "boat_name" },
    { Header: "Captain Name", accessor: "captain_name" },
    { Header: "Day 1", accessor: "day_1_total" },
    { Header: "Day 2", accessor: "day_2_total" },
    { Header: "Total score", accessor: "total_score" },
  ];

  return (
    <LeaderboardTable
      tabs={[
        { label: "Overall Score", key: "over_all" },
        { label: "Day 1 - 14th March 2025", key: "day_1" },
        { label: "Day 2 - 15th March 2025", key: "day_2" },
      ]}
      columnsMap={{
        over_all: ChubCayOverScore,
        day_1: ChubCayDays,
        day_2: ChubCayDays,
      }}
      dataMap={{
        over_all: tournamentData.over_all,
        day_1: tournamentData.day_1,
        day_2: tournamentData.day_2,
      }}
    />
  );
};

export default ChubClayClassicLeaderBoard;