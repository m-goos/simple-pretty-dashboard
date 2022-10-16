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
import { IChartDataSet, IChartProps } from './chartTypes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const setBarData = (data: IChartDataSet) => ({
  labels: data.labels,
  datasets: [
    {
      data: data.data,
      backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
    },
  ],
});

function VerticalBarChart({ title, data }: IChartProps) {
  return (
    <ChartSurface>
      <ChartTitle title={title} />
      <Bar options={CHART_OPTIONS} data={setBarData(data)} />
    </ChartSurface>
  );
}

export default VerticalBarChart;