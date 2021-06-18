import React from 'react';
import './App.css';
import MainData from './components/MainData.jsx';
import IndiaData from './components/IndiaData'
import StatesData from './components/StatesData';
import TimelineData from './components/TimelineData';
function App() {

  

  return (
    <div className="App">
     <MainData/>
     <IndiaData/>
     <StatesData/>
     <TimelineData/>
     
    </div>
  );
}

export default App;
