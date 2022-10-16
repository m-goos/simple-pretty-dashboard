import { useQuery } from '@tanstack/react-query';
import client from '../api/client';
import { useFilter } from '../context/filterContext';
import ErrorPage from './ErrorPage';
import LineChart from './LineChart';
import Loading from './Loading';
import NoResult from './NoData';

function InvoicesCumulative() {
  const { state } = useFilter();

  // @TODO: add query type
  const { isLoading, error, data } = useQuery(
    [`/revenues/${state.timeFilter}`],
    () => client(`/revenues/${state.timeFilter}`)
  );

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;
  if (!data) return <NoResult />;

  return (
    <div className="bg-slate-200">
      <LineChart
        timeFilter={state.timeFilter}
        financialFilter={state.financialFilter}
      />
      ;
    </div>
  );
}

export default InvoicesCumulative;
