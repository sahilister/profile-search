import React, { Component} from 'react';
import Navbar from './components/layout/Navbar'
// import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=
      ${process.env.REACT_CLIENT_ID}&client_secret=${process.env.REACT_CLIENT_SECRET}`)
    this.setState({ users: res.data, loading: false})
  }
  render() {
    return (
      <div>
        <Navbar title="Profile Search"/>
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
