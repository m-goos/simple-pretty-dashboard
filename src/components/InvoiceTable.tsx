import Table from './Table';

/**
 * @returns List of the 15 latest invoices by date, with id, date, costumer name, region, invoice total
(or total margin, depending on switcher value).
 */
function InvoiceTable() {
  const columns = 'colums';
  const data = 'data';
  // return <Table columns={columns} data={data} />;
  return <Table />;
}

export default InvoiceTable;
