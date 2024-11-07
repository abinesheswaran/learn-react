import { useState } from 'react';

const useCustomHooks = (incVal) => {
  const [count, setCount] = useState(0);
  const setterFunction = () => setCount((p) => p + incVal);
  return [count, setterFunction];
};

export default useCustomHooks;
