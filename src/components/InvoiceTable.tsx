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

const columns = [
  columnHelper.accessor('customer_name', {
    header: () => 'Customer Name',
    cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
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
  columnHelper.accessor('total_invoice', {
    header: () => 'Revenue',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('total_margin', {
    header: () => 'Margin',
    cell: (info) => info.getValue(),
  }),
];

/**
 * @returns List of the 15 latest invoices by date, with id, date, costumer name, region, invoice total
(or total margin, depending on switcher value).
 */
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

  return (
    <Table<TInvoice>
      data={latestFifteenInvoices}
      columns={columns}
      title={invoiceTitle}
    />
  );
}

export default InvoiceTable;
