import { useQuery } from '@tanstack/react-query';
import client from '../api/client';
import { TRevenuesMonthly, TRevenuesWeekly } from '../api/types';
import { useFilter } from '../context/filterContext';
import ErrorPage from './ErrorPage';
import LineChart, { IChartData } from './LineChart';
import Loading from './Loading';
import NoResult from './NoData';

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

  const title = `Cumulative ${state.timeFilter} invoice ${state.financialFilter} in €`;

  let revenueData: IChartData = {
    labels: [''],
    dataset: {
      data: [0],
      label: title,
    },
  };

  if (state.timeFilter === 'monthly') {
    // @TODO (next step): sort data
    revenueData = {
      labels: (data as TRevenuesMonthly).map((month) => month.month),
      dataset: {
        label: title,
        data: data.map((month) => month[`total_${state.financialFilter}`]),
      },
    };
  }
  if (state.timeFilter === 'weekly') {
    revenueData = {
      labels: (data as TRevenuesWeekly).map((week) => week.week),
      dataset: {
        label: title,
        data: data.map((week) => week[`total_${state.financialFilter}`]),
      },
    };
  }

  return (
    <div className="bg-slate-200">
      <LineChart title={title} data={revenueData} />
    </div>
  );
}

export default InvoicesCumulative;
