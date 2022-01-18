import React, { Suspense } from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screens/Home";
import Details from "./screens/Details";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
