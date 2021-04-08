import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { React, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component  {
  render() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route path="/home" component={AboutMe}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
}

export default App;
