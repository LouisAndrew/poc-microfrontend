import { Route, Switch } from 'react-router-dom';

import Home from './Home';

const RouterView = (): JSX.Element => (
  <Switch>
    <Route path="/about" />
    <Route path="/users" />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default RouterView;
