import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ["Decorations", "Catering", "Music", "Venue", "Others"],
    datasets: [
      {
        label: "Budget (in $)",
        data: [1200, 2000, 800, 1500, 500],
        backgroundColor: "#432818",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#432818",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#432818", 
        },
      },
      y: {
        ticks: {
          color: "#432818",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Budget Allocation</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
