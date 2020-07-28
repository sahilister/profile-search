import React, { Component } from 'react'

class Navbar extends Component {
  // static defaultProps = {
  //   title: 'Github Finder'
  // }
  render() {
    return(
      <nav className="navbar is-light" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="200" height="400" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;


          // <i className="fa fa-github fa-2x" aria-hidden="true">{this.props.title}</i>
