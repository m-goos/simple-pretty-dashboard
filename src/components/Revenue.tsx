import { useQuery } from '@tanstack/react-query';
import client from '../api/client';
import { TCategoriesRevenue } from '../api/APITypes';
import { useFilter } from '../context/filterContext';
import ErrorPage from './ErrorPage';

import Loading from './Loading';
import NoResult from './NoData';
import VerticalBarChart from './charts/VerticalBarChart';
import { IChartDataSet } from './charts/chartTypes';

function Revenue() {
  const { state } = useFilter();

  const { isLoading, error, data } = useQuery<TCategoriesRevenue>(
    ['/categories/revenues'],
    () => client('/categories/revenues')
  );

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;
  if (!data) return <NoResult />;

  const chartTitle = `Total ${state.financialFilter} in € by product`;

  const labels = data.map((product) => product.category_name);

  /** based on toggled filter, active data changes */
  const activeData = data.map(
    (product) => product[`total_${state.financialFilter}`]
  );

  const productData1: IChartDataSet = {
    labels: labels,
    data: activeData,
  };

  return <VerticalBarChart title={chartTitle} data={productData1} />;
}

export default Revenue;
