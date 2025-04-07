import React, { useEffect, useState } from "react";
import Table from "../../Table";

const HeaviestFishOfTheTournament = ({ data, totalAmount }) => {
  const [topOne, setTopOne] = useState([]);

  useEffect(() => {
    dataSortingHandler();
  }, []);

  const dataSortingHandler = () => {
    if (data) {
      let maxFishWeight = 0;
      let maxFishWeightObject = {};

      data.day_1.forEach((entry) => {
        if (entry.overall_heavy_fish) {
          const maxWeightInFish = Math.max(
            ...entry.fish_weights.map((weight) => parseFloat(weight))
          );

          if (maxWeightInFish > maxFishWeight) {
            maxFishWeight = maxWeightInFish;
            maxFishWeightObject = entry;
          }
        }
      });

      data.day_2.forEach((entry) => {
        if (entry.overall_heavy_fish) {
          const maxWeightInFish = Math.max(
            ...entry.fish_weights.map((weight) => parseFloat(weight))
          );

          if (maxWeightInFish > maxFishWeight) {
            maxFishWeight = maxWeightInFish;
            maxFishWeightObject = entry;
          }
        }
      });

      const topOneRecord = maxFishWeightObject;

      if (Object.keys(topOneRecord).length > 0) {
        const remainingAmount = totalAmount - totalAmount * 0.1;
        topOneRecord.prize = `$ ${remainingAmount}`;

        setTopOne([topOneRecord]);
      }
    }
  };

  const tableColumn = [
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
      <div className="title">
        Heaviest Fish of the Tournament Winner Take All
      </div>
      <div className="table-row my-2">
        {topOne.length > 0 ? (
          <Table
            columns={tableColumn}
            data={topOne}
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

export default HeaviestFishOfTheTournament;
