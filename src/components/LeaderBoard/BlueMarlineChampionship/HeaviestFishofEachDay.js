import React, { useEffect, useState } from "react";
import Table from "../../Table";
import { object } from "framer-motion/client";

const HeaviestFishofEachDay = ({ data, totalAmount }) => {
  const [heavistEachDay, setHeavistEachDay] = useState([]);
  const remainingAmount = totalAmount - totalAmount * 0.1;
  const dayOnePrize = remainingAmount * 0.5;
  const dayTwoPrize = remainingAmount * 0.5;

  useEffect(() => {
    dataSortingHandler();
  }, []);

  const dataSortingHandler = () => {
    if (data?.day_1.length || data?.day_2.length) {
      let day1maxFishWeight = 0;
      let day1maxFishWeightObject = {};

      data.day_1.forEach((entry) => {
        if (entry.daily_heaviest_fish) {
          const maxWeightInFish = Math.max(
            ...entry.fish_weights.map((weight) => parseFloat(weight))
          );

          if (maxWeightInFish > day1maxFishWeight) {
            day1maxFishWeight = maxWeightInFish;
            day1maxFishWeightObject = entry;
          }
        }
      });

      let day2maxFishWeight = 0;
      let day2maxFishWeightObject = {};

      data.day_2.forEach((entry) => {
        if (entry.daily_heaviest_fish) {
          const maxWeightInFish = Math.max(
            ...entry.fish_weights.map((weight) => parseFloat(weight))
          );

          if (maxWeightInFish > day2maxFishWeight) {
            day2maxFishWeight = maxWeightInFish;
            day2maxFishWeightObject = entry;
          }
        }
      });

      const day1Top = day1maxFishWeightObject;
      const day2Top = day2maxFishWeightObject;

      if (Object.keys(day1Top).length > 0 || Object.keys(day2Top).length > 0) {
        day1Top.prizee = `$ ${dayOnePrize}`;
        day1Top.day = "Day 1";
        day2Top.prizee = `$ ${dayTwoPrize}`;
        day2Top.day = "Day 2";

        setHeavistEachDay([day1Top, day2Top]);
      }
    }
  };

  const tableColumn = [
    {
      Header: "Day",
      accessor: "day",
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
      accessor: "prizee",
    },
  ];

  return (
    <div className="table-section">
      <div className="title">Heaviest Fish of Each Day Winner Take All</div>
      <div className="table-row my-2">
        {heavistEachDay.length > 0 ? (
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

export default HeaviestFishofEachDay;
