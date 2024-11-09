import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Button = () => {
  const [count, setCount] = useState(0);
  const context = useAppContext();
  useEffect(() => {
    context.dispatch({ val: 10 });
  }, [count]);
  console.log(context);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};
export default Button;
