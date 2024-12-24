import React, { useState } from 'react';

export const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  if (!data || !data.time || data.time.length === 0) {
    return <p className="text-gray-500">No data available to display.</p>;
  }

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.time.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.time.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(e.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Max Temp (°C)</th>
            <th className="border px-4 py-2">Min Temp (°C)</th>
            <th className="border px-4 py-2">Mean Temp (°C)</th>
            <th className="border px-4 py-2">Max Apparent Temp (°C)</th>
            <th className="border px-4 py-2">Min Apparent Temp (°C)</th>
            <th className="border px-4 py-2">Mean Apparent Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((date, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{date || 'N/A'}</td>
              <td className="border px-4 py-2">{data.temperature_2m_max?.[index] || 'N/A'}</td>
              <td className="border px-4 py-2">{data.temperature_2m_min?.[index] || 'N/A'}</td>
              <td className="border px-4 py-2">{data.temperature_2m_mean?.[index] || 'N/A'}</td>
              <td className="border px-4 py-2">{data.apparent_temperature_max?.[index] || 'N/A'}</td>
              <td className="border px-4 py-2">{data.apparent_temperature_min?.[index] || 'N/A'}</td>
              <td className="border px-4 py-2">{data.apparent_temperature_mean?.[index] || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-white">Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="bg-gray-700 text-white ml-2 p-2 rounded"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-blue-500 text-white p-2 rounded mx-1"
          >
            Prev
          </button>
          <span className="text-white">{currentPage}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-blue-500 text-white p-2 rounded mx-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
