import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '@/views/index';
import './App.css';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} /> 
        <Redirect from="/" to="/home" /> 
      </Switch>
    </Router>
  );
}

export default App;
