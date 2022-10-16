import { useFilter } from '../context/filterContext';
import ErrorPage from './ErrorPage';

import Loading from './Loading';
import VerticalBarChart from './charts/VerticalBarChart';
import { IChartDataSet } from './charts/chartTypes';
import useCategoriesRevenues from '../api/hooks/useCategoriesRevenues';

function Revenue() {
  const { state } = useFilter();

  const { status, error, data } = useCategoriesRevenues();

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorPage error={error as Error} />;

  const DataTitle = `Total ${state.financialFilter} in € by product`;

  const labels = data.map((product) => product.category_name);

  /** based on toggled filter, active data changes */
  const activeData = data.map(
    (product) => product[`total_${state.financialFilter}`]
  );

  const productData1: IChartDataSet = {
    labels: labels,
    data: activeData,
  };

  return <VerticalBarChart title={DataTitle} data={productData1} />;
}

export default Revenue;
