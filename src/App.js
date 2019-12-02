import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// containers
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Onboarding from "./containers/Onboarding";
import Dashboard from "./containers/Dashboard";
import ResetPassword from "./containers/ResetPassword";
import ForgotPassword from "./containers/ForgotPassword";
import ActivateAccount from "./containers/ActivateAccount";

// styles
import "./App.scss";

function App() {
  return (
    <Router>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/onboarding" component={Onboarding} />
      <Route exact path="/resetPassword" component={ResetPassword} />
      <Route exact path="/forgot" component={ForgotPassword} />
      <Route exact path="/verifyEmail" component={ActivateAccount} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
