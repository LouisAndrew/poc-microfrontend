import { BrowserRouter as Router } from 'react-router-dom';

import Links from './components/Links';
import RouterView from './components/RouterView';

const App = (): JSX.Element => (
  <div className="app px-4">
    <Router basename="/poc-microfrontend">
      <Links />
      <RouterView />
    </Router>
  </div>
);

export default App;
