import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routes } from './router/routes';
import './App.css';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(item => {
            return (<Route path={item.path} exact component={item.component} key={item.path+'rou'} />)
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
