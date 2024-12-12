import { useState } from 'react';
import { Root } from '../types/Root.type';
export const NombreCell = ({ getValue, table, row }: Root) => {
  const initialState = getValue();
  const [value, setValue] = useState(initialState);
  const { updateField } = table.options.meta;
  const id = row.original.id;
  console.log();
  // const Onblur = () => {
  //   updateField(id, value);
  // };
  return (
    <input
      className='text-white'
      type='text'
      value={value}
      // onBlur={Onblur}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
