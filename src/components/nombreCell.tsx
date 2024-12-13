import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const textSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: 'El campo "nombre" no puede estar vacío' })
    .max(50, { message: 'El nombre no puede tener más de 50 caracteres' }),
});

export const NombreCell = ({ getValue, table, row }: any) => {
  const initialState = getValue() as string;
  const [text, setText] = useState(initialState);
  const { updateField } = table.options.meta;
  const id = row.original.id;
  // console.log(`create by ${id}`);

  useEffect(() => {
    setText(getValue());
  }, [getValue]);

  const Onblur = () => {
    try {
      if (text === initialState) return;
      const finalText = textSchema.parse({ nombre: text });
      updateField(id, finalText);
      toast.success('se actualizó correctamente');
    } catch (error) {
      setText(initialState);
      if (error instanceof z.ZodError) {
        const errorMsg =
          error.errors[0]?.message || 'Error de validación desconocido';
        toast.error(errorMsg);
      }
    }
  };
  return (
    <input
      onClick={(e) => e.stopPropagation()}
      className='bg-transparent w-full px-2'
      type='text'
      onBlur={Onblur}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
