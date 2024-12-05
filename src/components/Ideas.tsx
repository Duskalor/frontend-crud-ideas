import { Navigate, useParams } from 'react-router-dom';
import { useGetDataById } from '../hook/useData';
import { routes } from '../lib/const';

export const Ideas = () => {
  const { id } = useParams();
  if (id === undefined) return <Navigate to={routes.Categoria} />;

  const { data } = useGetDataById(routes.Ideas, id);

  console.log(data);
  return (
    <div>
      {data?.map((idea) => (
        <div key={idea.id}>
          <h2>{idea.titulo}</h2>
          <p>{idea.descripcion}</p>
        </div>
      ))}
    </div>
  );
};
