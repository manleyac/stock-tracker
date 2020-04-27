import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";

//components
import Navbar from "./components/layout/Navbar.component.js";
import Landing from "./components/layout/Landing.component.js";
import Alert from "./components/layout/Alert.component.js";
import Home from "./components/layout/Home/Home.component.js";

//styles
import "./App.styles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
