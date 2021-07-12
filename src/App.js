import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import User from './components/users/User.js'
import Alert from './components/layout/Alert.js'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import NotFound from './components/pages/NotFound.js'

import GithubState from './context/github/GithubState.js'
import AlertState from './context/alert/AlertState.js'

import './App.css'

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
