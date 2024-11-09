import { Outlet } from 'react-router-dom';
import AppNavLink from './AppNavLink';

const Page3 = () => {
  return (
    <>
      <div style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}>
        <p>Page3</p>
      </div>
      <AppNavLink />
      <Outlet />
    </>
  );
};

export default Page3;
