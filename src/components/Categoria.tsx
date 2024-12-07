import { useState } from 'react';
import { ModelFormNewCategoria } from '../components/ModelFormNewCategoria';
import { useGetData } from '../hook/useData';
import { routes } from '../lib/const';
import { CategoriaWithcreateAt } from '../types/categoria.type';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { TableTanstack } from './Table';

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
export const Categoria = () => {
  const { data = [] } = useGetData(routes.Categoria);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <h1 className='text-center text-3xl py-6'>Categorias</h1>
      <div className='flex justify-end py-2'>
        <button
          onClick={() => setShowModal(true)}
          className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Agregar nueva categoría
        </button>
      </div>
      {showModal && <ModelFormNewCategoria handleClose={handleClose} />}
      <TableTanstack data={data} columns={columns} />
    </>
  );
};
