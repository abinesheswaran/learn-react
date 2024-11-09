import { Outlet } from 'react-router-dom';
import AppNavLink from './AppNavLink';

const Page2 = () => {
  return (
    <>
      <Outlet />
      <AppNavLink />
      <div
        style={{ backgroundColor: 'green', width: '300px', height: '300px' }}
      >
        <p>Page2</p>
      </div>
    </>
  );
};

export default Page2;