import { useState } from 'react';

const GreenChildrenComponent = () => {
  const [count, setCount] = useState(0);
  console.log('GreenChildren component rerendering ***');

  return (
    <div style={{ backgroundColor: 'green', padding: '10px' }}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};
export default GreenChildrenComponent;
