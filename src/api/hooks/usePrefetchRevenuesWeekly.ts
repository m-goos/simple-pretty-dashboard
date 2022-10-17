import { useQueryClient } from '@tanstack/react-query';
import client from '../client';

async function usePrefetchRevenuesWeekly() {
  await useQueryClient().prefetchQuery(['/revenues/weekly'], () =>
    client(`/revenues/weekly`)
  );
}

export default usePrefetchRevenuesWeekly;
