import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-default bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand text-light" href="https://react.dev/">
            {/* <Link to="/" > */}
            React
            {/* </Link> */}
          </a>
        </div>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/services">
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="p/17">
              Dynamic
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="products">
              ProductList
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="login">
          LogIn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
