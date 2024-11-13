/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const CounterProvider = createContext();
const useCount = () => useContext(CounterProvider);
console.log(useCount);
const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const incCount = () => setCount((p) => p + 1);
  const decCount = () => setCount((p) => p - 1);
  return (
    <CounterProvider.Provider value={{ count, incCount, decCount }}>
      <div>{children}</div>
    </CounterProvider.Provider>
  );
};

function Title({ children }) {
  return <span>{children}</span>;
}
function IncButton({ children }) {
  const { incCount } = useCount();
  return <button onClick={incCount}>{children}</button>;
}
function DecButton({ children }) {
  const { decCount } = useCount();
  return <button onClick={decCount}>{children}</button>;
}
function Count() {
  const { count } = useCount();
  return <span>{count}</span>;
}
Counter.Title = Title;
Counter.IncButton = IncButton;
Counter.DecButton = DecButton;
Counter.Count = Count;

export default Counter;
