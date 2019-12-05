import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JoinPage from './pages/join'
import ListPage from './pages/list'
import CreatePage from './pages/create'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/join" component={JoinPage} />
        <Route exact path="/" component={ListPage} />
        <Route exact path="/create" component={CreatePage} />
      </Router>
    </div>
  );
}

export default App;
