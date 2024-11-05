import { useState } from 'react';

const RedChildrenComponent = () => {
  const [count, setCount] = useState(0);
  console.log('RedChildren component rerendering ***');
  return (
    <div style={{ backgroundColor: 'red', padding: '10px' }}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};
export default RedChildrenComponent;
