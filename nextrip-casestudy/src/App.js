import React from 'react';
import './App.scss';
import Header from './components/Header';
import ProcessStepper from './components/ProcessStepper';
import BusRoutes from './components/BusRoutes';
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Header/>
      <Typography>Minneapolis Metro Transit Bus Line</Typography>
        <ProcessStepper/>
      <BusRoutes/>
    </div>
  );
}

export default App;
