import React, { Component} from 'react';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

 // Search Users
  searchUsers = async text => {
      this.setState({ loading: true })
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_CLIENT_ID}&client_secret=${process.env.REACT_CLIENT_SECRET}`)
      console.log(res.data.items)
      this.setState({ users: res.data.items, loading: false})
  }

 // Clear Users after search happens
  clearUsers = () => {
    this.setState({ users: [] })
  }

  // Alert on empty search
  alertUsers = (msg) => {
    this.setState({ alert: msg})
    setTimeout(() => this.setState({ alert: null}), 5000)
  }

  render() {
    return (
      <div>
        <Navbar title="Profile Search" />
        <Alert alert={this.state.alert}/>
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          users={this.state.users}
          alertUsers={this.alertUsers}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
