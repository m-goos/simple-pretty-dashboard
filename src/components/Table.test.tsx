import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { screen, render } from '@testing-library/react';

import Table from './Table';

const columns = [
  { header: 'Customer Name', accessorKey: 'customer_name', id: 1 },
  { header: 'Revenue', accessorKey: 'total_invoice', id: 2 },
  { header: 'Margin', accessorKey: 'total_margin', id: 3 },
  { header: 'Date', accessorKey: 'date', id: 4 },
  { header: 'Invoice ID', accessorKey: 'id', id: 5 },
  { header: 'Region', accessorKey: 'region', id: 6 },
];

const customColumnVisibility = {
  total_margin: false,
  total_invoice: false,
};

const mockTableData = [
  {
    id: 81,
    customer_id: 15,
    customer_name: 'Tim Wu',
    date: '2020-12-29',
    invoice_lines: [],
    total_invoice: 2393.45,
    total_margin: 409.90999999999997,
    region: 'Australia',
  },
  {
    id: 213,
    customer_id: 3,
    customer_name: 'Daniels Priete',
    date: '2020-12-29',
    invoice_lines: [],
    total_invoice: 24420.879999999997,
    total_margin: 3125.1399999999994,
    region: 'Australia',
  },
  {
    id: 68,
    customer_id: 31,
    customer_name: 'Tim Muijs',
    date: '2020-12-27',
    invoice_lines: [],
    total_invoice: 8426.09,
    total_margin: 1436.78,
    region: 'Europe',
  },
];

describe('Table', () => {
  it('renders a table', () => {
    render(
      <Table
        columns={columns}
        columnVisibility={customColumnVisibility}
        data={mockTableData}
        icon={<DocumentTextIcon />}
        title={'Latest invoices'}
      />
    );

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
  it('renders all the table headers', () => {
    render(
      <Table
        columns={columns}
        columnVisibility={customColumnVisibility}
        data={mockTableData}
        icon={<DocumentTextIcon />}
        title={'Latest invoices'}
      />
    );

    columns.map((column) =>
      expect(
        screen.getByRole('columnheader', { name: column.header })
      ).toBeInTheDocument()
    );
  });
});
