import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export const IdeasLayout = () => {
  return (
    <section className='mx-auto container'>
      <Toaster richColors />
      <nav>
        {/* <NavLink to={'/categoria'}>categoria</NavLink> */}
        {/* <NavLink to={'/ideas'}>ideas</NavLink> */}
      </nav>
      <div>
        <Outlet />
      </div>
    </section>
  );
};
