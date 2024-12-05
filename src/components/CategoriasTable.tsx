import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import dayjs from 'dayjs';
import { type CategoriaWithcreateAt } from '../types/categoria.type';
import { useNavigate } from 'react-router-dom';

const columns: ColumnDef<CategoriaWithcreateAt>[] = [
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripción',
  },
  {
    accessorKey: 'created_at',
    header: 'Fecha de creación',
    cell: ({ row: { original } }) => (
      <div className='text-center'>
        {dayjs(original.createAt).format('DD MMM YYYY')}
      </div>
    ),
  },
];

export const CategoriasTable = ({
  categorias,
}: {
  categorias: CategoriaWithcreateAt[];
}) => {
  const navigate = useNavigate();
  const table = useReactTable({
    data: categorias,
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
              onClick={() => navigate(`/categoria/${row.original.id}/ideas`)}
              key={row.id}
              className={`cursor-pointer ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
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
