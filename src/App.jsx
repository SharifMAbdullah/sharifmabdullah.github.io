import React from 'react';
import Navbar from './components/Navbar';
import TopContainer from './components/TopContainer';
import SkillContainer from './components/SkillContainer';
import BottomContainer from './components/BottomContainer';
import ProjectContainer from './components/ProjectContainer';
import ResearchContainer from './components/ResearchContainer';
import ExperienceContainer from './components/ExperienceContainer';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <TopContainer />
      <SkillContainer />
      <ResearchContainer />
      <ExperienceContainer />
      <ProjectContainer />
      <BottomContainer />
    </BrowserRouter>
  );
};

export default App;
