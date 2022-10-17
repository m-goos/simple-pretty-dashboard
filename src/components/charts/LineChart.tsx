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
import DataSurface from '../DataSurface';
import DataTitle from '../DataTitle';
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
      borderColor: '#1d4ed8',
      backgroundColor: '#60a5fa',
    },
  ],
});

function LineChart({ title, data, icon }: IChartProps) {
  return (
    <DataSurface>
      <DataTitle title={title} icon={icon} />
      <Line options={CHART_OPTIONS} data={setData(data)} />
    </DataSurface>
  );
}

export default LineChart;
