import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./pages/main/dashboard.js";

function App() {
  return (
    <Router>
      {/* Route */}
      <Route
        path="/"
        exact
        render={({ history }) => <Dashboard history={history} />}
      />
    </Router>
  );
}

export default App;
