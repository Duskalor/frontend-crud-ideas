export interface Categoria {
  nombre: string;
  descripcion?: string;
}

export type CategoriaWithcreateAt = Categoria & {
  createAt: string;
  id: string;
};
