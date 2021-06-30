import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import User from './components/users/User.js'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About.js'

import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_FINDER_APP_CLIENT_ID)

  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_FINDER_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_APP_CLIENT_SECRET}`);
  //   this.setState({ users:res.data, loading: false });


  //   // axios.get ("https://api.github.com/users")
  //   // .then(res => console.log(res.data))

  //   // fetch("https://api.github.com/users")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data)
  //   //   })
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_FINDER_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_APP_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false });
  }

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users/${username}?client_id=${process.env.REACT_APP_GITHUB_FINDER_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_APP_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false });
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render() {
    const { users, user, loading } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users
                    loading={loading}
                    users={users}
                  />
                </>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />

              )}

              />
            </Switch>


          </div>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;
