import { TRevenuesMonthly, TRevenuesWeekly } from '../api/APITypes';
import { useFilter } from '../context/filterContext';
import ErrorPage from './ErrorPage';
import LineChart from './charts/LineChart';
import Loading from './Loading';
import { IChartDataSet } from './charts/chartTypes';
import useRevenuesTimePeriod from '../api/hooks/useRevenuesTimePeriod';

function InvoicesCumulative() {
  const { state } = useFilter();

  const { status, error, data } = useRevenuesTimePeriod(state.timeFilter);

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorPage error={error as Error} />;

  const chartTitle = `Cumulative ${state.timeFilter} invoice ${state.financialFilter} in €`;

  const sortedByDate = data.slice().sort((a, b) => {
    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
  });

  /** e.g. '2020 W07' or '2020-02' */
  const labels =
    state.timeFilter === 'weekly'
      ? (sortedByDate as TRevenuesWeekly).map((week) => week.week)
      : (sortedByDate as TRevenuesMonthly).map((month) => month.month);

  /** based on toggled filter, active data changes */
  const activeData = sortedByDate.map(
    (timePeriod) => timePeriod[`total_${state.financialFilter}`]
  );

  const revenueData: IChartDataSet = {
    labels: labels,
    data: activeData,
  };

  return <LineChart title={chartTitle} data={revenueData} />;
}

export default InvoicesCumulative;
