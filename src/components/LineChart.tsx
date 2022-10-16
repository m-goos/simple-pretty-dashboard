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
import ChartSurface from './ChartSurface';
import ChartTitle from './ChartTitle';
import { CHART_OPTIONS } from '../constants';

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
  title: string;
  data: IChartData;
}
export interface IChartData {
  labels: string[]; // months or weeks
  dataset: {
    label: string;
    data: number[];
  };
}

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
  return (
    <ChartSurface>
      <ChartTitle title={title} />
      <Line options={CHART_OPTIONS} data={setData(data)} />
    </ChartSurface>
  );
}

export default LineChart;
