import { useQuery } from '@tanstack/react-query';
import client from '../api/client';
import { IProducts } from '../api/types';
import ErrorPage from './ErrorPage';
import Loading from './Loading';

function Revenue() {
  const { isLoading, error, data } = useQuery<IProducts>(['products'], () =>
    client('/products')
  );

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error as Error} />;

  return <>{data?.map((product) => product.category)}</>;
}

export default Revenue;
