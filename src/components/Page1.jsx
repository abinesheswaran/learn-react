import { Outlet } from 'react-router-dom';
import AppNavLink from './AppNavLink';

const Page1 = () => {
  return (
    <>
      <AppNavLink />
      <div style={{ backgroundColor: 'red', width: '300px', height: '300px' }}>
        <p>Page1</p>
      </div>
      <Outlet />
    </>
  );
};

export default Page1;
