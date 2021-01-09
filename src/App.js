import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Skills from './Components/Pages/Skills';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/skills" component={Skills}/>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
