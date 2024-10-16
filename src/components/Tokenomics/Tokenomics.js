import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./Tokenomics.css"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  // Doughnut chart data
  const data = {
    labels: ['Liquidity Pool (90%)', 'Team (35%)', 'Marketing (5%)'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [90, 35, 5], // The values for each section
        backgroundColor: ['#00e5ff', '#0097a7', '#00bfa5'], // Colors for each section
        hoverBackgroundColor: ['#00e5ff', '#0097a7', '#00bfa5'], // Colors on hover
        borderWidth: 1,
        borderColor: '#fff', // White border around each section
      },
    ],
  };

  // Chart options for responsiveness
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Display the legend below the chart
      },
    },
  };

  return (
    <div className="tokenomics-container">
      {/* Doughnut Chart Section */}
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>

      {/* Token Information Table */}
      <div className="token-info">
        <h2>Tokenomics</h2>
        <div className="token-details">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>: EthAi</td>
              </tr>
              <tr>
                <td>Token Name</td>
                <td>: $EthAi</td>
              </tr>
              <tr>
                <td>Token Standard</td>
                <td>: ERC20</td>
              </tr>
              <tr>
                <td>Blockchain</td>
                <td>: Ethereum</td>
              </tr>
              <tr>
                <td>Total Supply</td>
                <td>: 100 Million</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>: 5%</td>
              </tr>
              <tr>
                <td>Team</td>
                <td>: 35%</td>
              </tr>
              <tr>
                <td>Marketing</td>
                <td>: 5%</td>
              </tr>
              <tr>
                <td>Liquidity Pool</td>
                <td>: 90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
