import { useState } from 'react';
import ChildrenComponent from './ChildrenComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  console.log('Count val => ', count);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        flexDirection: 'column',
        gap: '25px',
      }}
    >
      Parent component
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <ChildrenComponent />
    </div>
  );
};

export default ParentComponent;
