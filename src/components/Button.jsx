import { useState } from 'react';
import { createPortal } from 'react-dom';

const Button = () => {
  const [count, setCount] = useState(0);
  return createPortal(
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>,
    document.body
  );
};

export default Button;
