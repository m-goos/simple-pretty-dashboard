import { useQuery } from '@tanstack/react-query';
import client from '../api/client';
import { useFilter } from '../context/filterContext';
import LineChart from './LineChart';

function InvoicesCumulative() {
  const { state } = useFilter();

  // @TODO: add query type
  const { isLoading, error, data } = useQuery(
    [`/revenues/${state.timeFilter}`],
    () => client(`/revenues/${state.timeFilter}`)
  );

  return (
    <div className="bg-slate-200">
      <LineChart lineChartTitle={state.timeFilter} />;
    </div>
  );
}

export default InvoicesCumulative;
