import { createColumnHelper } from '@tanstack/react-table';
import useCustomersRevenues from '../api/hooks/useCustomersRevenues';
import { useFilter } from '../context/filterContext';
import { formatCurrency } from '../utils/formatCurrency';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import Table from './Table';

/**
 *  @TODO
 * 2. get data from API, format where necessary, pass to component
 * 3. sort and pick top 15
 * 4. implement toggle margin/revenue
 *
 * **SPECS**
 * List of our best customers, with their
 * * name,
 * * their region,
 * * the number of invoices at their names and the
 * * total revenue (or total margin, depending on switcher value).
 * */

interface TCustomer {
  customer_name: string;
  region: string;
  invoices_count: number;
  total_revenue: number;
  total_margin: number;
}

const mockData: TCustomer[] = [
  {
    customer_name: 'Saidi Castex',
    region: 'Australia', // @TODO figure out where to get this
    invoices_count: 19,
    total_revenue: 277780.72000000003,
    total_margin: 31677.720000000005,
  },
];

const columnHelper = createColumnHelper<TCustomer>();

const columns = [
  columnHelper.accessor('customer_name', {
    header: () => 'Customer Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('region', {
    header: () => 'Region',
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
];

function BestCustomers() {
  const { state } = useFilter();

  const { status, error, data } = useCustomersRevenues();

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorPage error={error as Error} />;

  console.log('data', data);

  const bestCustomersTitle = `Top Customers (${state.financialFilter})`;

  const customColumnVisibility = {
    total_margin: state.financialFilter === 'margin',
    total_revenue: state.financialFilter === 'revenue',
  };

  return (
    <Table<TCustomer>
      data={mockData}
      columns={columns}
      title={bestCustomersTitle}
      columnVisibility={customColumnVisibility}
    />
  );
}

export default BestCustomers;
