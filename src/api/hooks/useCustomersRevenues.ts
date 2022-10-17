import { useQuery } from '@tanstack/react-query';
import { TCustomersRevenues } from '../APITypes';
import client from '../client';

function useCustomersRevenues() {
  return useQuery<TCustomersRevenues>(['/customers/revenues'], () =>
    client('/customers/revenues')
  );
}

export default useCustomersRevenues;
