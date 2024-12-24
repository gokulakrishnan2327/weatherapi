import React from 'react';

export const Table = ({ data }) => {
  if (!data || !data.time || data.time.length === 0) {
    return <p className="text-gray-500">No data available to display.</p>;
  }

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
          {data.time.map((date, index) => (
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
    </div>
  );
};
