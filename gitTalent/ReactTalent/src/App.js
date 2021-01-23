import React from 'react';
import './App.css';
import Programs from './containers/Programs';
import ProgramPage from './containers/ProgramPage';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to="/programs">Programs List</Link>
        <Route exact path="/programPage" component={ProgramPage} />
        <Route exact path="/programs" component={Programs} />
        <Route path="/programPage/:ProgramId" component={ProgramPage} />
      </Router>
    </div>
  )
}

export default App;
