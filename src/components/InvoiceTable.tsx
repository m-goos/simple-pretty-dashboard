import { createColumnHelper } from '@tanstack/react-table';

import ErrorPage from './ErrorPage';
import Loading from './Loading';
import Table from './Table';
import useInvoices from '../api/hooks/useInvoices';
import { useFilter } from '../context/filterContext';

const columnHelper = createColumnHelper<TInvoice>();

type TInvoice = {
  customer_name: string;
  id: number;
  date: string;
  region: string;
  total_invoice: number;
  total_margin: number;
};

const columns = [
  columnHelper.accessor((row) => row.customer_name, {
    id: 'customer_name',
    cell: (info) => info.getValue(),
    header: () => <span>Customer Name</span>,
    // footer: (info) => info.column.id,
  }),
  // columnHelper.accessor('age', {
  //   header: () => 'Age',
  //   cell: (info) => info.renderValue(),
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor('visits', {
  //   header: () => <span>Visits</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor('status', {
  //   header: 'Status',
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor('progress', {
  //   header: 'Profile Progress',
  //   footer: (info) => info.column.id,
  // }),
];

const exampleInvoiceData: TInvoice[] = [
  {
    customer_name: 'Saidi Castex',
    id: 1,
    date: '2020-07-18',
    region: 'Australia',
    total_invoice: 4208.75,
    total_margin: 655,
  },
  {
    customer_name: 'Martin Muijs',
    id: 2,
    date: '2020-04-10',
    total_invoice: 318.98,
    total_margin: 18.14,
    region: 'USA',
  },
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

  console.log(data);
  const invoiceTitle = `Latest Invoices (${state.financialFilter})`;

  return (
    <Table data={exampleInvoiceData} columns={columns} title={invoiceTitle} />
  );
}

export default InvoiceTable;
