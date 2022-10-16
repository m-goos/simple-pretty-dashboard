import { useQuery } from '@tanstack/react-query';
import client from '../api/client';
import { TRevenuesMonthly, TRevenuesWeekly } from '../api/APITypes';
import { useFilter } from '../context/filterContext';
import ErrorPage from './ErrorPage';
import LineChart from './charts/LineChart';
import Loading from './Loading';
import NoResult from './NoData';
import { IChartDataSet } from './charts/chartTypes';

function InvoicesCumulative() {
  const { state } = useFilter();

  const { isLoading, error, data } = useQuery<
    TRevenuesWeekly | TRevenuesMonthly
  >([`/revenues/${state.timeFilter}`], () =>
    client(`/revenues/${state.timeFilter}`)
  );

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;
  if (!data) return <NoResult />;

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
    // dataset: {
    data: activeData,
    // label: chartTitle,
    // },
  };

  return <LineChart title={chartTitle} data={revenueData} />;
}

export default InvoicesCumulative;
