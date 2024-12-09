import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IdeasWithCategoriaId, type Ideas } from '../types/ideas.type';
import { type Categoria } from '../types/categoria.type';

const fetchData = async ({ route, id }: { route: string; id?: string }) => {
  const optionalId = id ? `/${id}` : '';
  const URL = `http://localhost:3000/${route}${optionalId}`;
  const res = await fetch(URL);
  const data = await res.json();
  return [...data].reverse();
};

export const useGetData = (route: string) => {
  return useQuery({
    queryKey: [route],
    queryFn: () => fetchData({ route }),
  });
};

export const useGetDataById = (route: string, id: string) => {
  return useQuery({
    queryKey: [route, id],
    queryFn: () => fetchData({ route, id }),
  });
};

const PostData = async (value: Ideas | Categoria, route: string) => {
  const res = await fetch(`http://localhost:3000/${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value),
  });

  const data = await res.json();
  return data;
};

export const usePostData = (route: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (value: IdeasWithCategoriaId | Categoria) =>
      PostData(value, route),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [route] });
    },
  });
};
