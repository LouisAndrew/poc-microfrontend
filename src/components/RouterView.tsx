import { Route, Switch } from 'react-router-dom';

import Home from './Home';

const RouterView = (): JSX.Element => (
  <Switch>
    <Route path="/react">
      <poc-microfrontend-react />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default RouterView;
