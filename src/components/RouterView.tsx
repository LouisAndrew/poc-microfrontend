import { Route, Switch } from 'react-router-dom';

import Home from './Home';

const RouterView = (): JSX.Element => (
  <Switch>
    <Route path="/vue">
      <h3 className="font-semibold text-lg">
        Vue web component, loaded from the React container project.
        {' '}
        <a href="https://github.com/LouisAndrew/poc-microfrontend__vue" target="_blank" className="text-blue-400 font-mono font-light" rel="noreferrer">Link to github repo of the vue project</a>
      </h3>
      <vue-wc />
    </Route>
    <Route path="/users" />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default RouterView;
