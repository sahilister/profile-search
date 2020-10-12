import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.alertUsers("empty string")
    } else {
      this.props.searchUsers(this.state.text)
      this.setState({ text: '' })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return(!this.props.users.length > 0 ?
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="search" className="textarea" value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value="search" className="button"/>
        </form>
      </div> :
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="search" className="textarea" value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value="search" className="button"/>
        </form>
        <button className="button" onClick={this.props.clearUsers}>Clear</button>
      </div>
    )
  }
}

export default Search
