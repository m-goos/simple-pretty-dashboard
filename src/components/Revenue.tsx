import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import client from '../api/client';
import { TCategoriesRevenue } from '../api/types';
import ErrorPage from './ErrorPage';
import { TFinancialFilter } from './Filter';
import Loading from './Loading';
import NoResult from './NoData';
import VerticalBarChart, { IBarDataset } from './VerticalBarChart';

interface RevenueProps {
  financialFilter: TFinancialFilter;
}

function Revenue({ financialFilter }: RevenueProps) {
  const { isLoading, error, data } = useQuery<TCategoriesRevenue>(
    ['/categories/revenues'],
    () => client('/categories/revenues')
  );

  const [barData, setBarData] = useState<IBarDataset | null>(null);

  useEffect(() => {
    if (data) {
      const productNames = data.map((product) => product.category_name);
      const totalRevenue = data.map((product) => product.total_revenue);
      const totalMargin = data.map((product) => product.total_margin);
      const activeData =
        financialFilter === 'margin' ? totalMargin : totalRevenue;

      setBarData({ labels: productNames, data: activeData });
    }
  }, [financialFilter, data]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;
  if (!data || !barData) return <NoResult />;

  return <VerticalBarChart chartTitle={financialFilter} dataset={barData} />;
}

export default Revenue;
