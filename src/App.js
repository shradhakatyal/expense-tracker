import React from 'react';
import './App.css';

import { Header } from './Components/Header/Header';
import { Balance } from './Components/Balance/Balance';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balance />
      </div>
    </div>
  );
}

export default App;
