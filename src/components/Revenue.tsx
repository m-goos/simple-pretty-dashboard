import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import client from '../api/client';
import { TCategoriesRevenue } from '../api/types';
import { useFilter } from '../context/filterContext';
import ErrorPage from './ErrorPage';

import Loading from './Loading';
import NoResult from './NoData';
import VerticalBarChart, { IBarDataset } from './VerticalBarChart';

function Revenue() {
  const { isLoading, error, data } = useQuery<TCategoriesRevenue>(
    ['/categories/revenues'],
    () => client('/categories/revenues')
  );

  const { state } = useFilter();

  const [barData, setBarData] = useState<IBarDataset | null>(null);

  useEffect(() => {
    if (data) {
      // @TODO use a more compact array method
      const productNames = data.map((product) => product.category_name);
      const totalRevenue = data.map((product) => product.total_revenue);
      const totalMargin = data.map((product) => product.total_margin);
      const activeData =
        state.financialFilter === 'margin' ? totalMargin : totalRevenue;

      setBarData({ labels: productNames, data: activeData });
    }
  }, [state.financialFilter, data]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;
  if (!data || !barData) return <NoResult />;

  return (
    <VerticalBarChart chartTitle={state.financialFilter} dataset={barData} />
  );
}

export default Revenue;
