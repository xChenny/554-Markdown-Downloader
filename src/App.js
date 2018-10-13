import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./styles/app.scss";

// components

// views
import HomePage from "./views/Homepage";
import Errorpage from "./views/Errorpage";
import EditorPage from "./views/Editorpage";

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/editor" component={EditorPage} />
        <Route component={Errorpage} />
      </Switch>
    </div>
  </Router>
);

export default App;
