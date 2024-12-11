import { Navigate, NavLink, useParams } from 'react-router-dom';
import { useGetDataById } from '../hook/useData';
import { routes } from '../lib/const';
import { TableTanstack } from './Table';
import { ColumnDef } from '@tanstack/react-table';
import { IdeasWithcreateAt } from '../types/ideas.type';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ModelFormNewData } from './ModelFormNewData';
import { ButtonModal } from './ButtonModal';

export const columns: ColumnDef<IdeasWithcreateAt>[] = [
  {
    accessorKey: 'titulo',
    header: 'Nombre',
    size: 225,
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripción',
    size: 500,
  },
  {
    accessorKey: 'completado',
    header: 'Completado',
  },
  {
    accessorKey: 'created_at',
    header: 'Fecha de creación',
    cell: ({ getValue }) => {
      const date = getValue();
      return (
        <div className='text-center'>
          {dayjs(date as Date).format('DD MMM YYYY')}
        </div>
      );
    },
  },
];

export const Ideas = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  if (id === undefined) return <Navigate to={routes.Categoria} />;
  const { data } = useGetDataById(routes.Ideas, id);
  if (!data) return null;
  return (
    <div>
      <h1 className='text-center text-3xl py-6'>Ideas</h1>
      <section className='flex justify-between p-2'>
        <NavLink
          className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          to={'/categoria'}
        >
          categoria
        </NavLink>

        <ButtonModal modalfn={setShowModal}>Agregar nueva idea</ButtonModal>
        {showModal && (
          <ModelFormNewData
            handleClose={handleClose}
            route={routes.Ideas}
            categoriaId={id}
          />
        )}
      </section>
      <TableTanstack columns={columns} data={data} />
    </div>
  );
};
