import { Navigate, useParams } from 'react-router-dom';
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
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripción',
  },
  {
    accessorKey: 'created_at',
    header: 'Fecha de creación',
    cell: ({ row: { original } }) => {
      return (
        <div className='text-center'>
          {dayjs(original.createAt).format('DD MMM YYYY')}
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
      <ButtonModal modalfn={setShowModal}>Agregar nueva idea</ButtonModal>
      {showModal && (
        <ModelFormNewData
          handleClose={handleClose}
          route={routes.Ideas}
          categoriaId={id}
        />
      )}
      <TableTanstack columns={columns} data={data} />
    </div>
  );
};
