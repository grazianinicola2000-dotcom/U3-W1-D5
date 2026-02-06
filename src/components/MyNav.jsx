import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";

class MyNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: "#221F1F" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="public\logo.png" style={{ width: "100px", height: "55px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  My List
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <div className="d-flex align-items-center justify-content-end m-1 flex-grow-1">
                <a className="col nav-link dropdown-toggle text-secondary fs-10" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img style={{ width: "30px" }} src="\public\avatar.png" alt="avatar" />
                </a>
                <ul className="dropdown-menu bg-primary">
                  <li>
                    <a href="#" className="link-secondary text-decoration-none fs-8 fw-light p-4">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-secondary text-decoration-none fs-8 fw-light p-4">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNav;
