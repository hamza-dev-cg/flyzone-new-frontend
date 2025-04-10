import React, { useState, useEffect } from "react";

import Table from "../../Table";
import OverallHeaviest10Tournament from "./OverallHeaviest10Tournament";
import HeaviestFishofEachDay from "./HeaviestFishofEachDay";
import HeaviestFishOfTheTournament from "./HeaviestFishOfTheTournament";
import DailyAggregate from "./DailyAggregate";

const WahooOpenLeaderBoard = ({ blueMarlineCovewahooOpen }) => {
  const [wahooOpenData, setWahooOpenData] = useState(null);
  const [totalCalcutta, setTotalCalcutta] = useState({
    total_heaviest_10: 0,
    total_daily_heaviest_fish: 0,
    total_daily_aggregate: 0,
    total_overall_heavy_fish: 0,
  });
  useEffect(() => {
    leaderBoardDataHandler();
  }, []);

  const leaderBoardDataHandler = () => {
    let total_heaviest_10 = 0;
    let total_daily_heaviest_fish = 0;
    let total_daily_aggregate = 0;
    let total_overall_heavy_fish = 0;
    const wahooOpen = { day_1: [], day_2: [] };

    if (
      Array.isArray(blueMarlineCovewahooOpen) &&
      blueMarlineCovewahooOpen.length > 0
    ) {
      blueMarlineCovewahooOpen.forEach((record) => {
        record.heaviest_10 && ++total_heaviest_10;
        record.daily_heaviest_fish && ++total_daily_heaviest_fish;
        record.daily_aggregate && ++total_daily_aggregate;
        record.overall_heavy_fish && ++total_overall_heavy_fish;

        if (record?.fish_weights.length > 0) {
          for (const fw of record.fish_weights) {
            const day = parseInt(fw.day_number, 10);
            if (isNaN(day) || day < 1 || day > 2) {
              continue;
            }
            const dayKey = `day_${day}`;

            const totalWeight = fw.fish_weight.reduce((total, r) => {
              if (r) {
                return total + parseFloat(r);
              } else {
                return total;
              }
            }, 0);

            const newRecord = {
              id: record.id,
              tournament_category: record.tournament_category,
              boat_name: record.boat_name,
              captain_name: record.captain_name,
              email: record.email,
              angler_name: record.angler_name,
              fish_weights: fw.fish_weight,
              base: record.base,
              heaviest_10: record.heaviest_10,
              daily_heaviest_fish: record.daily_heaviest_fish,
              daily_aggregate: record.daily_aggregate,
              overall_heavy_fish: record.overall_heavy_fish,
              total_weight: parseFloat(totalWeight.toFixed(2)),
            };

            wahooOpen[dayKey].push(newRecord);
          }
        }
      });

      const sortedWahooOpen = dataSortingAndCalculatiing(wahooOpen);
      setWahooOpenData(sortedWahooOpen);
      console.log(wahooOpen);
    }

    setTotalCalcutta({
      total_heaviest_10: total_heaviest_10 * 3000,
      total_daily_heaviest_fish: total_daily_heaviest_fish * 3000,
      total_daily_aggregate: total_daily_aggregate * 3000,
      total_overall_heavy_fish: total_overall_heavy_fish * 3000,
    });
  };

  const dataSortingAndCalculatiing = (sortingAndCalculating) => {
    const getTotalWeightList = calculateTotalWaight(sortingAndCalculating);
    sortingAndCalculating["overall_weight"] = getTotalWeightList;

    for (const key in sortingAndCalculating) {
      const dataSorting = sortingRecordHandler(sortingAndCalculating[key]);
      sortingAndCalculating[key] = dataSorting;
    }

    return sortingAndCalculating;
  };

  const calculateTotalWaight = (data) => {
    const overallWeight = [];

    data.day_1.forEach((day1) => {
      const matchingDay2 = data.day_2.find(
        (day2) => day2.boat_name === day1.boat_name
      );

      const day1Total = day1.total_weight || 0;
      const day2Total = matchingDay2 ? matchingDay2.total_weight || 0 : 0;

      overallWeight.push({
        tournament_category: day1.tournament_category,
        boat_name: day1.boat_name,
        captain_name: day1.captain_name,
        email: day1.email,
        angler_name: day1.angler_name,
        base: day1.base,
        heaviest_10: day1.heaviest_10,
        daily_heaviest_fish: day1.daily_heaviest_fish,
        daily_aggregate: day1.daily_aggregate,
        overall_heavy_fish: day1.overall_heavy_fish,
        day_1_total: parseFloat(day1Total.toFixed(2)),
        day_2_total: parseFloat(day2Total.toFixed(2)),
        total_weight: parseFloat((day1Total + day2Total).toFixed(2)),
      });
    });

    data.day_2.forEach((day2) => {
      const existsInDay1 = data.day_1.find(
        (day1) => day1.boat_name === day2.boat_name
      );
      if (!existsInDay1) {
        overallWeight.push({
          tournament_category: day2.tournament_category,
          boat_name: day2.boat_name,
          captain_name: day2.captain_name,
          email: day2.email,
          angler_name: day2.angler_name,
          base: day2.base,
          heaviest_10: day2.heaviest_10,
          daily_heaviest_fish: day2.daily_heaviest_fish,
          daily_aggregate: day2.daily_aggregate,
          overall_heavy_fish: day2.overall_heavy_fish,
          day_1_total: 0,
          day_2_total: parseFloat(day2.total_weight.toFixed(2)) || 0,
          total_weight: parseFloat(day2.total_weight.toFixed(2)) || 0,
        });
      }
    });

    return overallWeight;
  };

  const sortingRecordHandler = (records) => {
    records.sort((a, b) => b.total_weight - a.total_weight);
    return records;
  };

  const touranmentDayRecordsTableColumn = [
    {
      Header: "Boat Name",
      accessor: "boat_name",
    },
    {
      Header: "Captain Name",
      accessor: "captain_name",
    },
    {
      Header: "Fish Weight.1",
      accessor: (row) => row.fish_weights?.[0] || "---",
    },
    {
      Header: "Fish Weight.2",
      accessor: (row) => row.fish_weights?.[1] || "---",
    },
    {
      Header: "Fish Weight.3",
      accessor: (row) => row.fish_weights?.[2] || "---",
    },
    {
      Header: "Fish Weight.4",
      accessor: (row) => row.fish_weights?.[3] || "---",
    },
    {
      Header: "Fish Weight.5",
      accessor: (row) => row.fish_weights?.[4] || "---",
    },
    {
      Header: "Total Weight (lbs)",
      accessor: (row) => row.total_weight || "---",
      id: "total_weight",
      sortType: "basic",
    },
  ];

  const totalWeightRecordTableColumn = [
    {
      Header: "Boat Name",
      accessor: "boat_name",
    },
    {
      Header: "Captain Name",
      accessor: "captain_name",
    },
    {
      Header: "Day 1",
      accessor: (row) => row.day_1_total || "---",
    },
    {
      Header: "Day 2",
      accessor: (row) => row.day_2_total || "---",
    },
    {
      Header: "Total Weight (lbs)",
      accessor: (row) => row.total_weight || "---",
      id: "total_weight",
      sortType: "basic",
    },
  ];


  return (
    <>
      {/* Overall Weight Table */}
      <div className="table-section">
        <div className="title">Overall Score</div>
        <div className="table-row my-2">
          {wahooOpenData?.overall_weight && (
            <Table
              columns={totalWeightRecordTableColumn}
              data={wahooOpenData?.overall_weight}
              isEditable={false}
              isDeletable={false}
            />
          )}
          {/* {wahooOpenData?.overall_weight.length === 0 && (
            <div className="empty-table-row text-center">
              The board will be updated during the event day
            </div>
          )} */}
        </div>
      </div>
      {/* Day 1 Table */}
      <div className="table-section">
        <div className="title">Day 1 - 17th January 2025</div>
        <div className="table-row my-2">
          {wahooOpenData?.day_1 && (
            <Table
              columns={touranmentDayRecordsTableColumn}
              data={wahooOpenData?.day_1}
              isEditable={false}
              isDeletable={false}
            />
          )}
          {/* {wahooOpenData?.day_1.length === 0 && (
            <div className="empty-table-row text-center">
              The board will be updated during the event day
            </div>
          )} */}
        </div>
      </div>
      {/* Day 2 Table */}
      <div className="table-section">
        <div className="title">Day 2 - 18th January 2025</div>
        <div className="table-row my-2">
          {wahooOpenData?.day_2 && (
            <Table
              columns={touranmentDayRecordsTableColumn}
              data={wahooOpenData?.day_2}
              isEditable={false}
              isDeletable={false}
            />
          )}
          {/* {wahooOpenData?.day_2.length === 0 && (
            <div className="empty-table-row text-center">
              The board will be updated during the event day
            </div>
          )} */}
        </div>
      </div>
      {/* Heavist 10 Table */}
      {/* <OverallHeaviest10Tournament
        data={wahooOpenData?.overall_weight}
        totalAmount={totalCalcutta?.total_heaviest_10}
      /> */}
      {/* Heavist Fish of the Tournament */}
      {/* <HeaviestFishofEachDay
        data={wahooOpenData}
        totalAmount={totalCalcutta?.total_daily_heaviest_fish}
      /> */}
      {/* Daily Aggregate */}
      {/* <DailyAggregate
        day_1_data={wahooOpenData?.day_1}
        day_2_data={wahooOpenData?.day_2}
        totalAmount={totalCalcutta?.total_daily_aggregate}
      /> */}
      {/* Heaviest Fish Of The Tournament */}
      {/* <HeaviestFishOfTheTournament
        data={wahooOpenData}
        totalAmount={totalCalcutta?.total_overall_heavy_fish}
      /> */}
    </>
  );
};

export default WahooOpenLeaderBoard;
