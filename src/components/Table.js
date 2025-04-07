import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";
import sortIcon from "../assets/images/sorting.png";
import { useNavigate } from "react-router-dom";
import "../assets/css/table.css";
import Avatar from "react-avatar";

const Table = ({ columns, data, isEditable = false, isDeletable = false }) => {
  const [popoverRow, setPopoverRow] = useState(null);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const handleRowClick = (event, rowIndex) => {
    event.stopPropagation();
    setPopoverRow((prevRow) => (prevRow === rowIndex ? null : rowIndex));
  };

  const navigate = useNavigate();

  const handleNavigate = (userData) => {
    navigate("/public/profile", { state: { user: userData } });
  };


  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table custom-table text-center" {...getTableProps()}>
          <thead className="thead-dark">
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers
                  .filter((column) => column.id !== "profile_image" && column.id !== "user_detail")
                  .map((column, index) => (
                    <th
                      key={index}
                      {...column.getHeaderProps(
                        column.id === "total_weight"
                          ? column.getSortByToggleProps()
                          : {}
                      )}
                      className="align-middle"
                    >
                      <div className="d-flex align-items-center justify-content-center">
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
              const tooltipText = (
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
                        <span className="fw-semibold">Boat Name:</span> {boat_name}
                      </div>
                      <hr className="m-0 p-0" />
                      <div className="mt-2 mb-1">
                        <span className="fw-semibold">Captain Name:</span> {captain_name}
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
                  style={{ cursor: "pointer" }}
                  className=" position-relative"

                >
                  {row.cells
                    .filter((cell) => cell.column.id !== "profile_image" && cell.column.id !== "user_detail")

                    .map((cell, cellIndex) => {

                      return (
                        <td
                          key={cellIndex}
                          {...cell.getCellProps()}
                          className={`align-middle ${popoverRow === rowIndex ? "has-tooltip" : ""
                            }`}
                        >
                          {popoverRow === rowIndex && (
                            <div className="tooltip-text">{tooltipText}</div>
                          )}

                          {cell.render("Cell")}
                        </td>
                      );
                    })}
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
