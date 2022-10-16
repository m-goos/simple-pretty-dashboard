import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TFinancialFilter, TTimeFilter } from '../context/filterContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  timeFilter: TTimeFilter;
  financialFilter: TFinancialFilter;
}

const setOptions = (
  timeFilter: TTimeFilter,
  financialFilter: TFinancialFilter
) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Cumulative ${timeFilter} invoice ${financialFilter} in €`,
      },
    },
  };

  return options;
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2.5, 3.5, 4, 5.2, 6, 9],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function LineChart({ timeFilter, financialFilter }: LineChartProps) {
  return <Line options={setOptions(timeFilter, financialFilter)} data={data} />;
}

export default LineChart;
// git commit -m "feat: set up LineChart"
