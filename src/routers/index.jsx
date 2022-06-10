import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register"></Route>
      <Route path="/login"></Route>
      <Route path="/dashboard"></Route>
    </Switch>
  );
};

export default Routers;
