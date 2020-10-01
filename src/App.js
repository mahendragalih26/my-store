import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Redirect } from "react-router-dom";

import store from "./assets/redux/store";

import "./pages/style/main.css";

import Dashboard from "./pages/main/main.js";

function App() {
  return (
    <Router>
      {/* <Provider store={store}> */}
      {/* Route */}
      <Route
        path="/"
        exact
        render={({ history }) => <Dashboard history={history} />}
      />
      {/* End Route */}
      {/* </Provider> */}
    </Router>
  );
}

export default App;
