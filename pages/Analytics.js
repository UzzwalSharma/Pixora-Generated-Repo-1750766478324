import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 📈',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-purple-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-pink-800 mb-8">Analytics 📊</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;