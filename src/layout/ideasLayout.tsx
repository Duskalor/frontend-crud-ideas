import { NavLink, Outlet } from 'react-router-dom';

export const IdeasLayout = () => {
  return (
    <section className='mx-auto container'>
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
