export interface IChartDataSet {
  labels: string[];
  data: number[];
}
export interface IChartProps {
  title: string;
  data: IChartDataSet;
}
