import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './App.css'
import 'tailwindcss/tailwind.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Table } from './Table';
import { Loader } from './Loader';

const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchWeatherData = async () => {
    if (!latitude || !longitude) {
      setError('Please provide valid latitude and longitude.');
      return;
    }
    setLoading(true);
    setError('');
  
    try {
      const response = await axios.get('https://archive-api.open-meteo.com/v1/archive', {
        params: {
          latitude,
          longitude,
          daily: ['temperature_2m_max', 'temperature_2m_min', 'apparent_temperature_max', 'apparent_temperature_min'],
          start_date: startDate.toISOString().split('T')[0],
          end_date: endDate.toISOString().split('T')[0],
          temperature_unit: 'celsius',
          timezone: 'auto',
        },
      });
  
      setWeatherData({
        time: response.data.daily?.time || [],
        temperature_2m_max: response.data.daily?.temperature_2m_max || [],
        temperature_2m_min: response.data.daily?.temperature_2m_min || [],
        temperature_2m_mean: response.data.daily?.temperature_2m_mean || [],
        apparent_temperature_max: response.data.daily?.apparent_temperature_max || [],
        apparent_temperature_min: response.data.daily?.apparent_temperature_min || [],
        apparent_temperature_mean: response.data.daily?.apparent_temperature_mean || [],
      });
    } catch (err) {
      setError('Failed to fetch weather data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const chartData = weatherData
  ? {
      labels: weatherData.time,
      datasets: [
        {
          label: 'Max Temperature (°C)',
          data: weatherData.temperature_2m_max,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.1,
        },
        {
          label: 'Min Temperature (°C)',
          data: weatherData.temperature_2m_min,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.1,
        },
      ],
    }
  : {};

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
  };

  return (
    <div className="container mx-auto p-5 bg-dark-gray text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Dashboard</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="border-2 p-3 rounded-md text-black"
            placeholder="Latitude"
          />
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="border-2 p-3 rounded-md text-black"
            placeholder="Longitude"
          />
       

          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border-2 p-3 rounded-md" />
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="border-2 p-3 rounded-md" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-md">
            Get Weather Data
          </button>
        </div>
      </form>

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {weatherData && weatherData.time?.length > 0 && (
        <>
          <Line data={chartData} />
          <Table data={weatherData} currentPage={currentPage} rowsPerPage={rowsPerPage} />
          <div className="flex justify-between items-center mt-4">
            {/* <select value={rowsPerPage} onChange={handleRowsPerPage} className="border-2 p-2 rounded-md bg-black text-white">
              <option value={10}>10 Rows</option>
              <option value={20}>20 Rows</option>
              <option value={50}>50 Rows</option>
            </select> */}
            
          </div>
        </>
      )}
    </div>
  );
};

export default App;
