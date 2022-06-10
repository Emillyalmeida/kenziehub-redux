import { Switch, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/register"></Route>
      <Route path="/login"></Route>
      <Route path="/dashboard"></Route>
    </Switch>
  );
};

export default Routers;
