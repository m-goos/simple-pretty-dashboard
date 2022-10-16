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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface IChartData {
  labels: string[]; // months or weeks
  dataset: {
    label: string;
    data: number[];
  };
}

interface LineChartProps {
  title: string;
  data: IChartData;
}

const setOptions = (title: string) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return options;
};

const setData = (data: IChartData) => ({
  labels: data.labels,
  datasets: [
    {
      label: data.dataset.label,
      data: data.dataset.data,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
});

function LineChart({ title, data }: LineChartProps) {
  return <Line options={setOptions(title)} data={setData(data)} />;
}

export default LineChart;
