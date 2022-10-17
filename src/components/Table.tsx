import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactNode } from 'react';
import DataSurface from './DataSurface';
import DataTitle from './DataTitle';

type visibilityFilter = { [key: string]: boolean };

interface TableProps<TData> {
  columns: any;
  data: TData[];
  title: string;
  columnVisibility: visibilityFilter;
  icon: ReactNode;
}

// from: https://tanstack.com/table/v8/docs/examples/react/basic
function Table<TData>({
  columns,
  data,
  title,
  columnVisibility,
  icon,
}: TableProps<TData>) {
  const table = useReactTable({
    data,
    state: { columnVisibility: columnVisibility },
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DataSurface>
      <DataTitle title={title} icon={icon} />
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto lg:-mx-8 xl:mx-0">
          <div className="inline-block min-w-full py-2 align-middle lg:px-8 xl:px-2">
            <div className="overflow-hidden rounded-lg border-b border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          scope="col"
                          className="px-6 py-1 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:py-3"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="whitespace-nowrap px-6 py-1 text-sm font-medium sm:py-4 sm:text-base sm:font-normal"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  {table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DataSurface>
  );
}

export default Table;
