import { useQuery } from '@tanstack/react-query';
import client from '../api/client';
import { TRevenuesMonthly } from '../api/types';
import ErrorPage from './ErrorPage';
import Loading from './Loading';

function Revenue() {
  const { isLoading, error, data } = useQuery<TRevenuesMonthly>(
    ['monthly revenues'],
    () => client('/revenues/monthly')
  );

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;

  return (
    <>
      {data?.map((month) => (
        <div>
          Total monthly revenue in {month.month}: {month.total_revenue}
        </div>
      ))}
    </>
  );
}

export default Revenue;
