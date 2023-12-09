import React from 'react';
import Navbar from './components/Navbar';
import TopContainer from './components/TopContainer';
import MidContainer from './components/MidContainer';
import BottomContainer from './components/BottomContainer';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <TopContainer/>
        <MidContainer/>
        <BottomContainer/>
    </BrowserRouter>
  );
};

export default App;
