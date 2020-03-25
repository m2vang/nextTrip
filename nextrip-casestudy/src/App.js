import React from 'react';
import './App.scss';
import Header from './components/Header';
import BusRoutes from './components/BusRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <p>Minneapolis Metro Transit Bus Line</p>
      <BusRoutes/>
    </div>
  );
}

export default App;
