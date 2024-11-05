import { useState } from 'react';
import RedChildrenComponent from './RedChildrenComponent';

const ParentWithoutCompComposition = () => {
  const [count, setCount] = useState(0);
  console.log('Parent component rerendering ***');

  return (
    <div style={{ backgroundColor: 'blue', padding: '20px' }}>
      <p style={{ color: 'white' }}>Parent Without Component Composition</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p style={{ color: 'white' }}>Children Component</p>
      <RedChildrenComponent />
    </div>
  );
};
export default ParentWithoutCompComposition;
