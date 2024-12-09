import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { type CategoriaWithcreateAt } from '../types/categoria.type';
import { useNavigate } from 'react-router-dom';
import { IdeasWithcreateAt } from '../types/ideas.type';

interface Props<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export const TableTanstack = <
  T extends CategoriaWithcreateAt | IdeasWithcreateAt,
>({
  data,
  columns,
}: Props<T>) => {
  const navigate = useNavigate();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className='w-full border-collapse text-black'>
      <thead>
        {table.getHeaderGroups().map((getHeaderGroup) => (
          <tr key={getHeaderGroup.id} className='bg-gray-200'>
            {getHeaderGroup.headers.map((header) => (
              <th key={header.id} className='border border-gray-300 p-2 '>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, index) => {
          return (
            <tr
              onClick={() => {
                'nombre' in data[0]
                  ? navigate(`/categoria/${row.original.id}/ideas`)
                  : console.log('aqui');
              }}
              key={row.id}
              className={` ${'nombre' in data[0] ? 'cursor-pointer' : ''}  ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='border border-gray-300 p-2'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
