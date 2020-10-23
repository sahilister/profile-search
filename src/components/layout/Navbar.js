import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // static defaultProps = {
  //   title: 'Github Finder'
  // }
    return(
      <nav className="navbar is-light" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://github.com/sahilister">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github-logo" />
          </a>
          <h2>Profile Search</h2>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;


          // <i className="fa fa-github fa-2x" aria-hidden="true">{this.props.title}</i>
