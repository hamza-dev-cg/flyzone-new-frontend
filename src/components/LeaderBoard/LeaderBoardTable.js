import React, { useState } from "react";
import Table from "../Table";

const LeaderboardTable = ({ tabs, columnsMap, dataMap, pageType = "full" }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");

  const currentColumns = columnsMap[activeTab] || [];
  const currentData = dataMap[activeTab] || [];

  return (
    <div
      className={`table-section table-body  ${
        pageType === "home" ? " " : "container"
      }`}
    >
      <div
        className={`leader-board-header d-flex flex-column flex-lg-row gap-2 `}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={` ${activeTab === tab.key ? "active-tab" : ""} ${
              pageType === "home"
                ? "leader-board-dates "
                : "leader-board-dates-full"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="table-row mt-2">
        <Table
          columns={currentColumns}
          data={currentData}
          isEditable={false}
          isDeletable={false}
        />
        {currentData.length === 0 && (
          <div className="text-center my-3">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardTable;
