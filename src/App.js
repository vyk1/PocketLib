import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from "./components/Navigation";

import Biblioteca from './components/Biblioteca/Biblioteca.jsx'

import './App.css'
import './App.scss'

import { DBConfig } from './db/DBConfig';
import { initDB } from 'react-indexed-db';
import About from "./components/About";
import Home from "./components/Home";
import Tags from "./components/Tags";

initDB(DBConfig);


export default function App() {
  return (
    <Router>
      <Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my-lib" component={Biblioteca} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/tags" component={Tags} />
        </Switch>
      </Navigation>
    </Router>
  );
}
