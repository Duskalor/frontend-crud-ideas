import { ReactNode } from 'react';

interface Props {
  modalfn: (value: boolean) => void;
  children: ReactNode;
}

export const ButtonModal = ({ modalfn, children }: Props) => {
  return (
    <button
      onClick={() => modalfn(true)}
      className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    >
      {children}
    </button>
  );
};
