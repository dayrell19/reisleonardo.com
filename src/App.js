import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Skills from './Components/Pages/Skills';
import Profile from './Components/Profile';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/skills" exact component={Skills}/>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
