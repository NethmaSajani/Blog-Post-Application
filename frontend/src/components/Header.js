import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <form className="d-flex">
          <Link to="/add">
            <button
              id="create-btn"
              className="btn btn-outline-success"
              type="button"
            >
              Create New Blog
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Header;
