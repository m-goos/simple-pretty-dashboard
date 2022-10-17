import { createColumnHelper } from '@tanstack/react-table';
import useCustomersRevenues from '../api/hooks/useCustomersRevenues';
import { useFilter } from '../context/filterContext';
import { formatCurrency } from '../utils/formatCurrency';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import Table from './Table';

/**
 *  @TODO
 * 2. x get data from API, format where necessary, pass to component
 * 3. x sort and pick top 15
 * 4. x implement toggle margin/revenue
 * 5. re-use data from /invoices endpoint
 * 6. get array of regions per customer
 *
 * **SPECS**
 * List of our best customers, with their
 * * name,
 * * their region,
 * * the number of invoices at their names and the
 * * total revenue (or total margin, depending on switcher value).
 * */

interface ICustomer {
  customer_name: string;
  invoices_count: number;
  total_revenue: number;
  total_margin: number;
  // region: string[]; @TODO get region from other endpoint
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
  // columnHelper.accessor('regions', {
  //   header: () => 'Region',
  //   cell: (info) => info.getValue(),
  // }),
];

function TopCustomersTable() {
  const { state } = useFilter();

  const { status, error, data } = useCustomersRevenues();

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorPage error={error as Error} />;

  console.log('data', data);

  const sortedDescendingByFilter = data
    .slice()
    .sort(
      (a, b) =>
        b[`total_${state.financialFilter}`] -
        a[`total_${state.financialFilter}`]
    );

  const bestFifteenCustomers = sortedDescendingByFilter.slice(0, 14);

  const bestCustomersTitle = `Top Customers by ${state.financialFilter}`;

  const customColumnVisibility = {
    total_margin: state.financialFilter === 'margin',
    total_revenue: state.financialFilter === 'revenue',
  };

  return (
    <Table<ICustomer>
      data={bestFifteenCustomers}
      columns={columns}
      title={bestCustomersTitle}
      columnVisibility={customColumnVisibility}
    />
  );
}

export default TopCustomersTable;
