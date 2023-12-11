import React from 'react';
import Navbar from './components/Navbar';
import TopContainer from './components/TopContainer';
import SkillContainer from './components/SkillContainer';
import BottomContainer from './components/BottomContainer';
import ProjectContainer from './components/ProjectContainer';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <TopContainer/>
      <SkillContainer />
      <ProjectContainer/>
      <BottomContainer/>
    </BrowserRouter>
  );
};

export default App;
