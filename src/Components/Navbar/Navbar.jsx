import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ loginUser, logout }) {
  const [toggle, setToggle] = useState(false);
  function toggleNav() {
    setToggle(!toggle);
  }
  return (
    <div className="navbar-sec shadow-lg">
      <nav className={`container-lg d-flex flex-column flex-lg-row justify-content-between py-3`}>
        <div className="logo d-flex justify-content-between align-items-center">
           <NavLink className="text-decoration-none fw-bold fs-5" to="/home">
              <i className="fab fa-google-play fs-5"></i> SkyMov
            </NavLink>
        <button className="d-lg-none btn btn-transparent" onClick={toggleNav}><i className={`${toggle? 'fa-times': 'fa-bars'} fa fs-2 text-white`} aria-hidden="true"></i></button>
        </div>
        <div className={`${!toggle ? 'd-none':''} d-lg-flex flex-column flex-lg-row justify-content-between mx-auto mx-lg-0 w-75`}>
          <ul className={`d-flex list-unstyled flex-column flex-lg-row my-3 my-lg-2 align-items-center`}>
            {loginUser ? (
              <>
                <li className="px-3 mb-2 mb-lg-0">
                  <NavLink
                    className={({ isActive }) =>
                      "text-decoration-none" + (isActive ? " blue-cl" : "")
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="px-3 mb-2 mb-lg-0">
                  <NavLink
                    className={({ isActive }) =>
                      "text-decoration-none" + (isActive ? " blue-cl" : "")
                    }
                    to="/movies"
                  >
                    Movies
                  </NavLink>
                </li>
                <li className="px-3 mb-2 mb-lg-0">
                  <NavLink
                    className={({ isActive }) =>
                      "text-decoration-none" + (isActive ? " blue-cl" : "")
                    }
                    to="/tv"
                  >
                    Tv
                  </NavLink>
                </li>
                <li className="px-3 mb-2 mb-lg-0">
                  <NavLink
                    className={({ isActive }) =>
                      "text-decoration-none" + (isActive ? " blue-cl" : "")
                    }
                    to="/people"
                  >
                    People
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>

          <div className={`d-flex flex-column flex-lg-row align-items-center`}>
            <ul className="list-unstyled d-flex px-2 my-2">
              <li className="px-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fa-facebook-f" aria-hidden="true" />{" "}
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fa-instagram" aria-hidden="true" />{" "}
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fa-youtube" aria-hidden="true" />{" "}
                </a>
              </li>
            </ul>
            <ul className="list-unstyled pointer-event logout d-flex my-2">
              {loginUser ? (
                <li onClick={logout} className="px-1">
                  Logout
                </li>
              ) : (
                <>
                  <li className="px-1">
                    <NavLink className="text-decoration-none" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="px-1">
                    <NavLink className="text-decoration-none" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}
