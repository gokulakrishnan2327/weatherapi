
# Weather Report Application

This is a weather report application built with React.js, where users can enter latitude and longitude values to fetch weather data for the selected location. The application displays the temperature (max, min, and mean) and apparent temperature (max, min, and mean) for the chosen dates, both in a table and in a line chart for visual representation.

## Features

- **Weather Data Fetching**: Allows users to input latitude and longitude and fetch weather data for a specific date range.
- **Visual Representation**: Displays temperature data in a line chart using Chart.js.
- **Responsive Table**: Presents the fetched weather data in a clean, responsive table format.
- **Error Handling**: Displays appropriate error messages when data cannot be fetched or input is missing.
- **Date Picker**: Users can select a start date and end date to view historical weather data.

## Tech Stack

- **React.js**: Frontend framework used to build the application.
- **Chart.js**: For visualizing the weather data in line charts.
- **Axios**: For making API requests to fetch weather data.
- **Tailwind CSS**: For styling the application with utility-first CSS.
- **React-datepicker**: For selecting date ranges.

## Installation

### Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/gokulakrishnan2327/weatherapi.git
cd weatherapi
```

### Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Run the application

After the dependencies are installed, run the application:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## API Used

The application uses the [Open-Meteo Archive API](https://open-meteo.com/) to fetch historical weather data. The endpoint used is:

```text
[https://archive-api.open-meteo.com/v1/archive
](https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2024-12-08&end_date=2024-12-22&hourly=temperature_2m)```

## Features Walkthrough

1. **Latitude & Longitude Inputs**:
   - Users enter the latitude and longitude of the location they want to fetch weather data for.

2. **Date Picker**:
   - Users can select a date range (start date and end date) for which they want to view the weather data.

3. **Fetch Weather Data**:
   - After entering the coordinates and selecting dates, users click the "Get Weather Data" button to fetch weather data for the given location and date range.

4. **Weather Data Table**:
   - The fetched weather data is displayed in a table with the following columns:
     - Date
     - Max Temp (°C)
     - Min Temp (°C)
     - Mean Temp (°C)
     - Max Apparent Temp (°C)
     - Min Apparent Temp (°C)
     - Mean Apparent Temp (°C)

5. **Line Chart**:
   - The data is visualized using a line chart showing the max and min temperatures over the selected date range.

## Folder Structure

The project folder structure is as follows:

```
weatherapi/
├── src/
│   ├── App.js               # Main component, where logic for fetching data is implemented.
│   ├── Table.js             # Component to display weather data in a table.
│   ├── Loader.js            # Component for displaying a loading spinner.
│   ├── index.js             # Entry point of the React application.
│   └── App.css              # Global styles for the app.
├── public/
│   ├── index.html           # Main HTML file.
└── package.json             # Project metadata and dependencies.
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.


## Acknowledgements

- **Open-Meteo** for providing free weather data.
- **Chart.js** for the beautiful charts.
- **React.js** and **Tailwind CSS** for building a fast and responsive UI.

---
