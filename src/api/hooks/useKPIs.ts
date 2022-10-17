import { useQuery } from '@tanstack/react-query';
import { TKPIs } from '../APITypes';
import client from '../client';

function useKPIs() {
  return useQuery<TKPIs>(['/kpis'], () => client('/kpis'));
}

export default useKPIs;
