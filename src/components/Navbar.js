import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-dark bg-dark navbar-expand">
      <Link to="/" className="navbar-brand">Excer Tracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Exercises</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">Create Exercise</Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
