import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Login} from './components/Login';
import {Cadastro} from './components/Cadastro';
import {Home} from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const isBackgroundBlue = true;

  return (
    <div className="App">
      <div className={isBackgroundBlue ? 'background-blue' : 'background-white'}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
