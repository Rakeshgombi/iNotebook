import React from 'react'
import {
  Link,
  useLocation,
  Redirect
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }

  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {localStorage.getItem('token') ?
            <button onClick={handleLogout} className="btn btn-light mx-1 btn-sm" role="button">Logout</button>
            : <form className="d-flex">
              <Link to="/signup" className="btn btn btn-outline-info mx-1 btn-sm" role="button">Signup</Link>
              <Link to="/login" className="btn btn-light mx-1 btn-sm" role="button">Signin</Link>
            </form>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
