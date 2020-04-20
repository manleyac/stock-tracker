import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Navbar from "./components/layout/Navbar.component.js";
import Landing from "./components/layout/Landing.component.js";

//styles
import "./App.styles.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
      </Fragment>
    </Router>
  );
}

export default App;
