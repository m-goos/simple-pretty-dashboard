import { createColumnHelper } from '@tanstack/react-table';

import ErrorPage from './ErrorPage';
import Loading from './Loading';
import Table from './Table';
import useInvoices from '../api/hooks/useInvoices';
import { useFilter } from '../context/filterContext';

const columnHelper = createColumnHelper<TInvoice>();

export type TInvoice = {
  customer_name: string;
  id: number;
  date: string;
  region: string;
  total_invoice: number;
  total_margin: number;
};

const formatCurrency = (number: number) =>
  Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);

console.log(formatCurrency(5.1234));

const columns = [
  columnHelper.accessor('customer_name', {
    header: () => 'Customer Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('total_invoice', {
    header: () => 'Revenue',
    cell: (info) => formatCurrency(info.getValue()),
  }),
  columnHelper.accessor('total_margin', {
    header: () => 'Margin',
    cell: (info) => formatCurrency(info.getValue()),
  }),
  columnHelper.accessor('id', {
    header: () => 'Invoice ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: () => 'Date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('region', {
    header: () => 'Region',
    cell: (info) => info.getValue(),
  }),
];

function InvoiceTable() {
  const { state } = useFilter();

  const { status, error, data } = useInvoices();

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorPage error={error as Error} />;

  const invoiceTitle = `Latest Invoices (${state.financialFilter})`;

  const sortedByLatestDate = data.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const latestFifteenInvoices = sortedByLatestDate.slice(0, 14);

  const customColumnVisibility = {
    total_margin: state.financialFilter === 'margin',
    total_invoice: state.financialFilter === 'revenue',
  };

  return (
    <Table<TInvoice>
      data={latestFifteenInvoices}
      columns={columns}
      title={invoiceTitle}
      columnVisibility={customColumnVisibility}
    />
  );
}

export default InvoiceTable;
