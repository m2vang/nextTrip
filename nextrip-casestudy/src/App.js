import React from 'react';
import './App.scss';
import Header from './components/Header';
import ProcessStepper from './components/ProcessStepper';
import BusRoutes from './components/BusRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <p>Minneapolis Metro Transit Bus Line</p>
        <ProcessStepper/>
      <BusRoutes/>
    </div>
  );
}

export default App;
