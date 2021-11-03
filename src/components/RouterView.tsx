import { Route, Switch } from 'react-router-dom';

import Home from './Home';

const RouterView = (): JSX.Element => (
  <Switch>
    <Route path="/react">
      <poc-microfrontend-react />
    </Route>

    <Route path="/vue">
      <h3 className="font-semibold text-lg">
        Vue web component, loaded from the React container project.
        {' '}
        <a href="https://github.com/LouisAndrew/poc-microfrontend__vue" target="_blank" className="text-blue-400 font-mono font-light" rel="noreferrer">Link to github repo of the vue project</a>
      </h3>
      <vue-wc />
    </Route>

    <Route path="/randomcats-component">
      <h3 className="font-semibold text-lg">
        Random Cute Cats
        {' '}
        <a href="https://github.com/NathanaelHermanto/RandomCats" target="_blank" className="text-blue-400 font-mono font-light" rel="noreferrer">Link to github repo of this project</a>
      </h3>
      <randomcats-component />
    </Route>

    <Route path="/bmi-tracker">
      <h3 className="font-semibold text-lg">
        BMI Tracker
      </h3>
      <a href="https://github.com/sunanmau5/bmi-tracker" target="_blank" className="text-blue-400 font-mono font-light" rel="noreferrer">Link to github repo of this project</a>
      <bmi-tracker />
    </Route>

    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default RouterView;
