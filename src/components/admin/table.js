import React from "react";
import TableWrapper from './style'

const Table = ({ columns, data, renderRow, loading }) => {
    return (
        <TableWrapper>
            <table className="table m-0">
                <thead>
                    <tr>
                        {columns.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={columns.length} className="text-center p-4">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                    ) : data?.length > 0 ? (
                        data.map((record, index) => renderRow(record, index))
                    ) : (
                        <tr >
                          <td colSpan={columns.length}>
                            <div className="text-center">
                            <strong>No Data Found</strong>
                            </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default Table;
