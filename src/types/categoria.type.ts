export interface Categoria {
  nombre: string;
  descripcion?: string;
}

export type CategoriaWithcreateAt = Categoria & {
  created_at: string;
  id: string;
};
