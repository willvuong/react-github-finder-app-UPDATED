import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import User from './components/users/User.js'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About.js'

import GithubState from './context/github/GithubState.js'

import './App.css'

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <>
                  <Search showAlert={showAlert} />
                  <Users />
                </>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
