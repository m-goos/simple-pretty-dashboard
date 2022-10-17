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
import DataSurface from '../DataSurface';
import DataTitle from '../DataTitle';
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
      backgroundColor: [
        '#22d3ee',
        '#2dd4bf',
        '#f97316',
        '#d946ef',
        '#a855f7',
        '#818cf8',
        '#064e3b',
        '#db2777',
        '#84cc16',
      ],
    },
  ],
});

function VerticalBarChart({ title, data, icon }: IChartProps) {
  return (
    <DataSurface>
      <DataTitle title={title} icon={icon} />
      <Bar options={CHART_OPTIONS} data={setBarData(data)} />
    </DataSurface>
  );
}

export default VerticalBarChart;
