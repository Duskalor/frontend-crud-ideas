export interface Ideas {
  titulo: string;
  descripcion?: string;
  completado: boolean;
}

export type IdeasWithcreateAt = Ideas & {
  created_at: string;
  id: string;
};

export type IdeasWithCategoriaId = Ideas & {
  categoriaId: string;
};
