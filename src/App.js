import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppProvider from "./AppProvider";
import Dashboard from "./Dashboard";
import Employee from "./Employee";
import ContextPlaygound from "./ContextPlaygound";

import "./App.css";

export default function App() {
  return (
    <Router>
      <AppProvider>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/modal" exact>
              <Dashboard />
            </Route>
            <Route path="/">
              <ContextPlaygound />
            </Route>
            <Route path="/employe">
              <Employee />
            </Route>
          </Switch>
        </div>
      </AppProvider>
    </Router>
  );
}
