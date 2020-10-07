import React from 'react'

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
        </div>
      </nav>
    );
}

export default Navbar;


          // <i className="fa fa-github fa-2x" aria-hidden="true">{this.props.title}</i>
