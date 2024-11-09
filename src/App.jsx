import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Page21 from './components/Page21';
import Page22 from './components/Page22';
import Page31 from './components/Page31';
import Page32 from './components/Page31';
import AppNavLink from './components/AppNavLink';

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
          <Route
            path="/"
            element={
              <>
                <AppNavLink />
                Welcome to home page
              </>
            }
          />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />}>
            <Route path="page2.1" element={<Page21 />} />
            <Route path="page2.2" element={<Page22 />} />
          </Route>
          <Route path="page3" element={<Page3 />}>
            <Route path="page3.1" element={<Page31 />} />
            <Route path="page3.2" element={<Page32 />} />
          </Route>
          <Route path="page4" element={<Page4 />} />
          <Route
            path="*"
            element={
              <>
                <AppNavLink />
                Error page
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
