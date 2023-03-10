import React from 'react';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Counter />
        <p>WORKING</p>
      </header>
    </div>
  );
}

export default App;
