import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";

import sortIcon from "../assets/images/sorting.png";
import "../assets/css/table.css";

const Table = ({ columns, data, isEditable = false, isDeletable = false }) => {
  const [popoverRow, setPopoverRow] = useState(null);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const navigate = useNavigate();

  const handleNavigate = (userData) => {
    navigate("/public/profile", { state: { user: userData } });
  };

  const handleRowClick = (event, rowIndex) => {
    event.stopPropagation();
    setPopoverRow((prev) => (prev === rowIndex ? null : rowIndex));
  };

  return (
    <div className="container-xxl p-0 bg-white custom-table-responsive">
      <div className="table-responsive">
        <table className="table custom-table text-center " {...getTableProps()}>
          <thead className="thead-dark  ">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers
                  .filter(
                    (c) => c.id !== "profile_image" && c.id !== "user_detail"
                  )
                  .map((column) => (
                    <th
                      key={column.id}
                      {...column.getHeaderProps(
                        column.id === "total_weight"
                          ? column.getSortByToggleProps()
                          : {}
                      )}
                      className=" sticky-header  align-middle"
                    >
                      <div className=" d-flex align-items-center justify-content-center">
                        {column.render("Header")}
                        {column.id === "total_weight" && (
                          <img
                            className="ms-2"
                            src={sortIcon}
                            alt={column.isSortedDesc ? "sort-desc" : "sort-asc"}
                          />
                        )}
                      </div>
                    </th>
                  ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              const { boat_name, captain_name, profile_image } = row.original;

              const tooltip = (
                <div className="d-flex gap-2 align-items-stretch">
                  <Avatar
                    size="89"
                    name={profile_image}
                    src={profile_image}
                    round={false}
                    className="rounded rounded-1 flex-shrink-0"
                    style={{ height: "100%" }}
                  />

                  <div className="d-flex flex-column justify-content-between">
                    <div>
                      <div className="mb-1">
                        <span className="fw-semibold">Boat Name:</span>{" "}
                        {boat_name}
                      </div>
                      <hr className="m-0 p-0" />
                      <div className="mt-2 mb-2">
                        <span className="fw-semibold">Captain Name:</span>{" "}
                        {captain_name}
                      </div>
                      <hr className="m-0" />
                      <button
                        className="view-detail mt-2"
                        onClick={() => handleNavigate(row.original)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              );

              return (
                <tr
                  key={rowIndex}
                  {...row.getRowProps()}
                  onClick={(e) => handleRowClick(e, rowIndex)}
                  className="position-relative"
                  style={{ cursor: "pointer" }}
                >
                  {row.cells
                    .filter(
                      (cell) =>
                        cell.column.id !== "profile_image" &&
                        cell.column.id !== "user_detail"
                    )
                    .map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        {...cell.getCellProps()}
                        className="  position-relative align-middle p-4"
                      >
                        {cell.render("Cell")}

                        {popoverRow === rowIndex && cellIndex === 0 && (
                          <div className="tooltip-text">{tooltip}</div>
                        )}
                      </td>
                    ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
