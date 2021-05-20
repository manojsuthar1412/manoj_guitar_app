import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/create" component={Create} exact />
        <Route path="/:id" component={Edit} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
