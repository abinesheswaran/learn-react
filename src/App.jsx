import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';

const Page1 = lazy(() => import('./components/Page1'));
const Page2 = lazy(() => import('./components/Page2'));
const Page21 = lazy(() => import('./components/Page21'));
const Page22 = lazy(() => import('./components/Page22'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />}>
            <Route path="page2.1" element={<Page21 />} />
            <Route path="page2.2" element={<Page22 />} />
          </Route>
          <Route index element={<Navigate replace to="page1" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
