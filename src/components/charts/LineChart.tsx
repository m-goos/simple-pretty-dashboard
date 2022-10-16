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
import ChartTitle from '../ChartTitle';
import { CHART_OPTIONS } from '../../constants';
import { IChartDataSet, IChartProps } from './chartTypes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const setData = (data: IChartDataSet) => ({
  labels: data.labels,
  datasets: [
    {
      data: data.data,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
});

function LineChart({ title, data }: IChartProps) {
  return (
    <ChartSurface>
      <ChartTitle title={title} />
      <Line options={CHART_OPTIONS} data={setData(data)} />
    </ChartSurface>
  );
}

export default LineChart;
