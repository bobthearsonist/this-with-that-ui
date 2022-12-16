import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          This With That
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/materials">
            Materials
          </Link>
          <Link className="nav-link" to="/relationships">
            Relationships
          </Link>
        </div>
      </nav>
    );
  }
}
