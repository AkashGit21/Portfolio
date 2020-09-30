import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Education from '../components/Education/Education';
import Activities from '../components/Activities/Activities';
import About from '../components/About/About';
import Main from '../components/Main/Main';

class App extends Component {  

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout/>
          <Route exact path="/" component={Main}/>
          <Route path="/about" component={About} />
          <Route path="/activities" component={Activities} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education}/>
          <Route path="/contact" component={Contact}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
