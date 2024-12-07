export interface Ideas {
  nombre: string;
  descripcion?: string;
}

export type IdeasWithcreateAt = Ideas & {
  createAt: string;
  id: string;
};
