import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Employee from "./Employee";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/modal">
            <Dashboard />
          </Route>
          <Route path="/">
            <Employee />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
