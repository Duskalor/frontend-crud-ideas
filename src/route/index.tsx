import { createBrowserRouter, Navigate } from 'react-router-dom';
import { IdeasLayout } from '../layout/ideasLayout';
import { Categoria } from '../components/Categoria';
import { Ideas } from '../components/Ideas';

export const route = createBrowserRouter([
  {
    element: <IdeasLayout />,
    children: [
      {
        path: 'categoria/:id/ideas',
        element: <Ideas />,
      },
      {
        path: '/categoria',
        element: <Categoria />,
      },
      {
        path: '*',
        element: <Navigate to='/categoria' />,
      },
    ],
  },
]);
