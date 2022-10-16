import { useQuery } from '@tanstack/react-query';
import { TTimeFilter } from '../../context/filterContext';
import { TRevenuesMonthly, TRevenuesWeekly } from '../APITypes';
import client from '../client';

function useRevenuesTimePeriod(timeFilter: TTimeFilter) {
  return useQuery<TRevenuesWeekly | TRevenuesMonthly>(
    [`/revenues/${timeFilter}`],
    () => client(`/revenues/${timeFilter}`)
  );
}

export default useRevenuesTimePeriod;
