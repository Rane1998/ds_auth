import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";
// UIs
import PrivateUI from "./components/ui/PrivateUI";
import LoginUI from "./components/ui/LoginUI";
import RegisterUI from "./components/ui/RegisterUI";
import ForgotPasswordUI from "./components/ui/ForgotPasswordUI";
import ResetPasswordUI from "./components/ui/ResetPasswordUI";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateUI} />
          <Route exact path="/login" component={LoginUI} />
          <Route exact path="/register" component={RegisterUI} />
          <Route
            exact
            path="/forgotPassword"
            component={ForgotPasswordUI}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordUI}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


