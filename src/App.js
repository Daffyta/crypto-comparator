import './scss/App.css';

import Registry from './components/registry'
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";

function App() {

  const mxnUsd = sessionStorage.getItem('mxn_usd');
  if (mxnUsd === null) {
    axios.get(process.env.REACT_APP_API_MXN_USD)
      .then((response) => {
        sessionStorage.setItem('mxn_usd', response.data.USD_MXN);
      });
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact={true}>
            <Registry />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
