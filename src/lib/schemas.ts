import { z } from 'zod';

export const schemaCategoria = z.object({
  nombre: z.string(),
  descripcion: z.string().optional(),
});

export const schemaIdeas = z.object({
  titulo: z.string(),
  descripcion: z.string().optional(),
  categoriaId: z.string(),
});
