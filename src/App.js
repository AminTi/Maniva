import "./App.css";

import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SimplePage from "./components/pages/SimplePage";

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
