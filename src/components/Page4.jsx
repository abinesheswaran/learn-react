import { useNavigate } from 'react-router';
import AppNavLink from './AppNavLink';
import { useEffect } from 'react';

const Page4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => navigate(-1), 4000);
    return () => clearTimeout(timerId);
  }, [navigate]);
  return (
    <>
      <div
        style={{ backgroundColor: 'yellow', width: '300px', height: '300px' }}
      >
        <p>Page4</p>
      </div>
      <AppNavLink />
    </>
  );
};

export default Page4;
