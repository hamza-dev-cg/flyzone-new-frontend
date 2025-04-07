import React, { useEffect, useState } from "react";
import Table from "../../Table";

const DailyAggregate = ({ day_1_data, day_2_data, totalAmount }) => {
  const [heavistEachDay, setHeavistEachDay] = useState([]);
  const remainingAmount = totalAmount - totalAmount * 0.1;
  const perDayAmount = remainingAmount * 0.5;
  const firstPrize = perDayAmount * 0.6;
  const secondPrize = perDayAmount * 0.4;

  useEffect(() => {
    dataSortingHandler();
  }, [day_1_data, day_2_data]);

  const dataSortingHandler = () => {
    if (day_1_data || day_1_data) {
      const heavistEachDayRecord = [];

      if (day_1_data.length > 0) {
        const getRecord = recordFinalizing(day_1_data, 1, firstPrize);
        if (getRecord) {
          heavistEachDayRecord[0] = getRecord[0];
          heavistEachDayRecord[1] = getRecord[1];
        }
      }

      if (day_2_data.length > 0) {
        const getRecord = recordFinalizing(day_2_data, 2, secondPrize);
        console.log("getRecord - 2: ", getRecord);
        heavistEachDayRecord[2] = getRecord[0];
        heavistEachDayRecord[3] = getRecord[1];
      }

      setHeavistEachDay(heavistEachDayRecord);
    }
  };

  const recordFinalizing = (record, day) => {
    const dailyAggregatArray = record.filter(
      (record) => record.daily_aggregate
    );

    if (dailyAggregatArray.length > 0) {
      const sortedArray = dailyAggregatArray.sort(
        (a, b) => b.total_weight - a.total_weight
      );
      const top2 = sortedArray.slice(0, 2);

      top2.forEach((record, index) => {
        if (index === 0) {
          record.day = `Day ${day}`;
          record.position = "1st";
          record.prize = `$ ${firstPrize}`;
        } else if (index === 1) {
          record.day = `Day ${day}`;
          record.position = "2nd";
          record.prize = `$ ${secondPrize}`;
        }
      });

      return top2;
    }
    return null;
  };

  const tableColumn = [
    {
      Header: "Days",
      accessor: "day",
    },
    {
      Header: "Position",
      accessor: "position",
    },
    {
      Header: "Team Name",
      accessor: "boat_name",
    },
    {
      Header: "Captain Name",
      accessor: "captain_name",
    },
    {
      Header: "Prize",
      accessor: "prize",
    },
  ];

  return (
    <div className="table-section">
      <div className="title">Daily Aggregate Top 5</div>
      <div className="table-row my-2">
        {heavistEachDay && heavistEachDay.length > 0 ? (
          <Table
            columns={tableColumn}
            data={heavistEachDay}
            isEditable={false}
            isDeletable={false}
          />
        ) : (
          <div className="empty-table-row text-center">
            The board will be updated during the event day
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyAggregate;
