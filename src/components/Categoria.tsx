import { useState } from 'react';
import { useGetData } from '../hook/useData';
import { routes } from '../lib/const';
import { CategoriaWithcreateAt } from '../types/categoria.type';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { TableTanstack } from './Table';
import { ModelFormNewData } from './ModelFormNewData';
import { ButtonModal } from './ButtonModal';
import { NombreCell } from './nombreCell';

const columns: ColumnDef<CategoriaWithcreateAt>[] = [
  {
    accessorKey: 'nombre',
    header: 'Nombre',
    size: 250,
    cell: NombreCell,
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripción',
    size: 500,
    cell: (props) => (
      <div className='p-2'>{props.getValue() as React.ReactNode}</div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: 'Fecha de creación',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <div className='text-center'>
        {dayjs(original.created_at).format('DD MMM YYYY')}
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
        <ButtonModal modalfn={setShowModal}>
          Agregar nueva categoría
        </ButtonModal>
      </div>
      {showModal && (
        <ModelFormNewData handleClose={handleClose} route={routes.Categoria} />
      )}
      <TableTanstack data={data} columns={columns} route={routes.Categoria} />
    </>
  );
};
