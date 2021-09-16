import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
