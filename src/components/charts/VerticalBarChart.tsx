// https://react-chartjs-2.js.org/examples/vertical-bar-chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CHART_OPTIONS } from '../../constants';
import ChartSurface from './ChartSurface';
import ChartTitle from '../ChartTitle';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface VerticalBarChartProps {
  title: string;
  data: IBarDataset;
}
interface IBarChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

export interface IBarDataset {
  labels: string[];
  data: number[];
}

const setBarData = (data: IBarDataset): IBarChartData => {
  const processedData: IBarChartData = {
    labels: data.labels,
    datasets: [
      {
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850',
        ],
        data: data.data,
      },
    ],
  };
  return processedData;
};

function VerticalBarChart({ title, data }: VerticalBarChartProps) {
  return (
    <ChartSurface>
      <ChartTitle title={title} />
      <Bar options={CHART_OPTIONS} data={setBarData(data)} />
    </ChartSurface>
  );
}

export default VerticalBarChart;
