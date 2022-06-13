import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard"></Route>
    </Switch>
  );
};

export default Routers;
