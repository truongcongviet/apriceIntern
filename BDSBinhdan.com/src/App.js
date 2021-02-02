import { lazy } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.scss';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const Homepage = lazy(() => import("./containers/Homepage"));

const App = () => {
  return (
  
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
