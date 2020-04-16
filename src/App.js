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

initDB(DBConfig);


export default function App() {
  return (
    <Router>
      <Navigation>
        <Switch>
          <Route path="/sobre">
            <About />
          </Route>
          <Route path="/my-lib">
            <Biblioteca />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Navigation>
    </Router>
  );
}
