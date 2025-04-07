import React, { useEffect, useState } from "react";
import Table from "../../Table";

const OverallHeaviest10Tournament = ({ data, totalAmount }) => {
  const [top3, setTop3] = useState([]);

  useEffect(() => {
    dataSortingHandler();
  }, []);

  const dataSortingHandler = () => {
    if (data) {
      const heaviest10Array = data.filter((record) => record.heaviest_10);
      const sortedArray = heaviest10Array.sort(
        (a, b) => b.total_weight - a.total_weight
      );
      const top3 = sortedArray.slice(0, 3);

      const remainingAmount = totalAmount - totalAmount * 0.1;
      // Calculate prize distribution
      const firstPrize = remainingAmount * 0.5;
      const secondPrize = remainingAmount * 0.3;
      const thirdPrize = remainingAmount * 0.2;

      top3.forEach((record, index) => {
        if (index === 0) {
          record.position = "1st";
          record.prize = `$ ${firstPrize}`;
        } else if (index === 1) {
          record.position = "2nd";
          record.prize = `$ ${secondPrize}`;
        } else if (index === 2) {
          record.position = "3rd";
          record.prize = `$ ${thirdPrize}`;
        }
      });

      setTop3(top3);
    }
  };

  const tableColumn = [
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
      <div className="title">Overall Heaviest 10 of the Tournament</div>
      <div className="table-row my-2">
        {top3.length > 0 ? (
          <Table
            columns={tableColumn}
            data={top3}
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

export default OverallHeaviest10Tournament;
