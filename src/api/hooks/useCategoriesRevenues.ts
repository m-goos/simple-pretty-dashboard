import { useQuery } from '@tanstack/react-query';
import { TCategoriesRevenue } from '../APITypes';
import client from '../client';

function useCategoriesRevenues() {
  return useQuery<TCategoriesRevenue>(['/categories/revenues'], () =>
    client('/categories/revenues')
  );
}

export default useCategoriesRevenues;
