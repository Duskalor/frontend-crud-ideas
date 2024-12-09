export interface Ideas {
  titulo: string;
  descripcion?: string;
}

export type IdeasWithcreateAt = Ideas & {
  createAt: string;
  id: string;
};

export type IdeasWithCategoriaId = Ideas & {
  categoriaId: string;
};
