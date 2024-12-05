import { useState } from 'react';
import { CategoriasTable } from '../components/CategoriasTable';
import { ModelFormNewCategoria } from '../components/ModelFormNewCategoria';
import { useGetData } from '../hook/useData';
import { routes } from '../lib/const';

export const Categoria = () => {
  const { data } = useGetData(routes.Categoria);
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
      <CategoriasTable categorias={data ?? []} />
    </>
  );
};
