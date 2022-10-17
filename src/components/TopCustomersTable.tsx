import { UserIcon } from '@heroicons/react/24/outline';
import { createColumnHelper } from '@tanstack/react-table';
import { IInvoice } from '../api/APITypes';

import useCustomersRevenues from '../api/hooks/useCustomersRevenues';
import useInvoices from '../api/hooks/useInvoices';
import { useFilter } from '../context/filterContext';
import { formatCurrency } from '../utils/formatCurrency';
import { removeDuplicates } from '../utils/removeDuplicates';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import Table from './Table';

interface ICustomer {
  customer_name: string;
  invoices_count: number;
  total_revenue: number;
  total_margin: number;
  regions: string;
}

const columnHelper = createColumnHelper<ICustomer>();

const columns = [
  columnHelper.accessor('customer_name', {
    header: () => 'Customer Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('invoices_count', {
    header: () => '# of invoices',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('total_margin', {
    header: () => 'Margin',
    cell: (info) => formatCurrency(info.getValue()),
  }),
  columnHelper.accessor('total_revenue', {
    header: () => 'Revenue',
    cell: (info) => formatCurrency(info.getValue()),
  }),
  columnHelper.accessor('regions', {
    header: () => 'Region',
    cell: (info) => info.getValue(),
  }),
];

function TopCustomersTable() {
  const { state } = useFilter();

  const { status, error, data } = useCustomersRevenues();
  const { status: invoicesStatus, data: invoicesData } = useInvoices();

  if (status === 'loading' || invoicesStatus === 'loading') return <Loading />;
  if (status === 'error' || invoicesStatus === 'error')
    return <ErrorPage error={error as Error} />;

  const topCustomersTitle = `Top Customers by ${state.financialFilter}`;

  // sort and get top {number} customers (in this case: 15)
  const sortedDescendingByFilter = data
    .slice()
    .sort(
      (a, b) =>
        b[`total_${state.financialFilter}`] -
        a[`total_${state.financialFilter}`]
    );
  const topCustomers = sortedDescendingByFilter.slice(0, 14);

  // extract regions per customer from invoices endpoint
  const topCustomersInvoices: IInvoice[][] = topCustomers.map((customer) =>
    invoicesData.filter(
      (invoice) => invoice.customer_id === customer.customer_id
    )
  );
  const regionsPerCustomer = topCustomersInvoices.map((invoiceArray) =>
    removeDuplicates(invoiceArray.map((invoice) => invoice.region))
  );

  // add regions to topCustomers
  const topCustomersWithRegions = topCustomers.map((customer, i) => ({
    ...customer,
    regions: regionsPerCustomer[i].join(', '),
  }));

  const customColumnVisibility = {
    total_margin: state.financialFilter === 'margin',
    total_revenue: state.financialFilter === 'revenue',
  };

  return (
    <Table<ICustomer>
      data={topCustomersWithRegions}
      columns={columns}
      title={topCustomersTitle}
      columnVisibility={customColumnVisibility}
      icon={<UserIcon />}
    />
  );
}

export default TopCustomersTable;
