import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'

import './App.css';

class App extends Component {
  componentDidMount() {
    

  
    
    // axios.get ("https://api.github.com/users")
    // .then(res => console.log(res.data))

    // fetch("https://api.github.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>

      </div>
    );
  }

}

export default App;
