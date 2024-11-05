import { useState } from 'react';

/* eslint-disable react/prop-types */
const ParentComponent = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log('Parent component rerendering ***');

  return (
    <div style={{ backgroundColor: 'blue', padding: '20px' }}>
      <p style={{ color: 'white' }}>Parent Component</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p style={{ color: 'white' }}>Children Component</p>
      {children}
    </div>
  );
};
export default ParentComponent;
