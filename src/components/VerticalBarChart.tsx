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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IBarChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

type TChartTitle = 'revenue' | 'margin';
export interface IBarDataset {
  labels: string[];
  data: number[];
}

const setOptions = (label: TChartTitle) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Total ${label}`,
      },
    },
  };

  return options;
};

const setBarData = (dataset: IBarDataset): IBarChartData => {
  const processedData: IBarChartData = {
    labels: dataset.labels,
    datasets: [
      {
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850',
        ],
        data: dataset.data,
      },
    ],
  };
  return processedData;
};

interface VerticalBarChartProps {
  chartTitle: TChartTitle;
  dataset: IBarDataset;
}

function VerticalBarChart({ chartTitle, dataset }: VerticalBarChartProps) {
  return <Bar options={setOptions(chartTitle)} data={setBarData(dataset)} />;
}

export default VerticalBarChart;
