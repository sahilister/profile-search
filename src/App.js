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
    const res = await axios.get('https://api.github.com/users')
    this.setState({ users: res.data, loading: false})
    console.log("step 1 done")
    console.log(this.state.users)
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
