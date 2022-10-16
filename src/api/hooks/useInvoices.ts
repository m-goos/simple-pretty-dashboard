import { useQuery } from '@tanstack/react-query';
import { TInvoices } from '../APITypes';
import client from '../client';

function useInvoices() {
  return useQuery<TInvoices>(['/invoices'], () => client('/invoices'));
}

export default useInvoices;
