import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  const auth = useSelector(({ user }) => user);
  return (
    <Switch>
      <Route exact path="/">
        {auth.user ? <Redirect to="/dashboard" /> : <Home />}
      </Route>
      <Route path="/register">
        {auth.user ? <Redirect to="/dashboard" /> : <Register />}
      </Route>
      <Route path="/login">
        {auth.user ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route path="/dashboard">
        {!auth.user ? <Redirect to="/login" /> : <Dashboard />}
      </Route>
    </Switch>
  );
};

export default Routers;
