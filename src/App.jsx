import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import RedChildrenComponent from './components/RedChildrenComponent';
import GreenChildrenComponent from './components/GreenChildrenComponent';
import ParentWithoutCompComposition from './components/ParentWithoutCompComposition';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ParentComponent>
            <RedChildrenComponent />
          </ParentComponent>
          <ParentComponent>
            <GreenChildrenComponent />
          </ParentComponent>
          <ParentWithoutCompComposition />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
