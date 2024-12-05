import { createPortal } from 'react-dom';
import { z } from 'zod';
import { routes } from '../lib/const';
import { usePostData } from '../hook/useData';

interface Props {
  handleClose: () => void;
}
const schema = z.object({
  nombre: z.string(),
  descripcion: z.string().optional(),
});

export const ModelFormNewCategoria = ({ handleClose }: Props) => {
  const { mutate } = usePostData(routes.Categoria);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(formData);

    if (!result.success) {
      console.error(result.error.errors);
      return;
    }
    const newDatatoDB = result.data;
    mutate(newDatatoDB);
    handleClose();
  };

  return createPortal(
    <form onSubmit={handleSubmit}>
      <div className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
            <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          </div>
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3
                    className='text-lg leading-6 font-medium text-gray-900'
                    id='modal-title'
                  >
                    Nueva categoría
                  </h3>
                  <div className='mt-2'>
                    <div>
                      <label
                        htmlFor='nombre'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Nombre
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='nombre'
                          id='nombre'
                          className='shadow-sm bg-white text-black  border-black border-2 w-full sm:text-sm  rounded-md'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Descripción
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='descripcion'
                          id='descripcion'
                          className='shadow-sm bg-white text-black  border-black border-2 w-full sm:text-sm  rounded-md'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <button
                type='submit'
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
              >
                Guardar
              </button>
              <button
                onClick={() => handleClose()}
                type='button'
                className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>,
    document.body
  );
};
