/* eslint-disable react/prop-types */
import { memo, useState } from 'react';

const Button = memo(function Button({ count: n, fn }) {
  const [count, setCount] = useState(0);
  console.log('Re-rendering Button ' + n);
  return (
    <button onClick={() => setCount((count) => fn(count, 1))}>
      count is {count}
    </button>
  );
});
export default Button;
