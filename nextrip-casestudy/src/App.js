import React from 'react';
import './App.css';
import BusRoutes from './components/BusRoutes';

function App() {
  return (
    <div className="App">
      <h1>NextTrip</h1>
      <p>Minneapolis Metro Transit Bus Line</p>
      <BusRoutes/>
    </div>
  );
}

export default App;
