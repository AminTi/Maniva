import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import SimplePage from "./pages/SImplePage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/SimpleRoutePage" component={SimplePage} />
      </Switch>
    </>
  );
}

export default App;
