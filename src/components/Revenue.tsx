import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import client from '../api/client';
import { TCategoriesRevenue } from '../api/types';
import ErrorPage from './ErrorPage';
import { TFinancialFilter } from './Filter';
import Loading from './Loading';
import NoData from './NoData';
import VerticalBarChart, { IBarDataset } from './VerticalBarChart';

function Revenue() {
  const { isLoading, error, data } = useQuery<TCategoriesRevenue>(
    ['/categories/revenues'],
    () => client('/categories/revenues')
  );

  const [barData, setBarData] = useState<IBarDataset | null>(null);
  const [mockFinancialFilter, setMockFinancialFilter] =
    useState<TFinancialFilter>('margin');

  // @TODO: get from context
  // const financialFilter: TFinancialFilter = 'margin';

  useEffect(() => {
    if (data) {
      const productNames = data.map((product) => product.category_name);
      const totalRevenue = data.map((product) => product.total_revenue);
      const totalMargin = data.map((product) => product.total_margin);
      const activeData =
        mockFinancialFilter === 'margin' ? totalMargin : totalRevenue;

      setBarData({ labels: productNames, data: activeData });
    }
  }, [mockFinancialFilter, data]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;
  if (!data || !barData) return <NoData />;

  return (
    <>
      <button onClick={() => setMockFinancialFilter('revenue')}>
        toggle revenue
      </button>{' '}
      |{' '}
      <button onClick={() => setMockFinancialFilter('margin')}>
        toggle margin
      </button>
      <VerticalBarChart chartTitle={mockFinancialFilter} dataset={barData} />
    </>
  );
}

export default Revenue;
