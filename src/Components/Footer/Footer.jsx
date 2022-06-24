import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="shadow-lg position-absolute buttom-0 w-100">
      <div className="container text-center py-4">
        <div className="row m-auto align-items-center">
          <div className="col-md-4 text-start">
            <h5>Copyrights by <a className='text-decoration-none blue-cl' href="https://www.github.com/BeshoyS" target="_blank" rel="noreferrer">Beshoy S.</a></h5>
          </div>
          <div className="col-md-4">
            <NavLink
              className="text-decoration-none"
              to="/home"
            >
              <i className="fab fa-google-play fs-2"></i> 
            </NavLink>
          </div>
          <div className="col-md-4">
          <div className='d-flex justify-content-end'>
        <ul className="list-unstyled d-flex justify-content-between px-2 my-2">
          <li className="px-2">
            <a href="https://www.linkedin.com/in/beshoy-s-said" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in fs-6" aria-hidden="true" />
            </a>
          </li>
          <li className="px-2">
            <a
              href="https://www.instagram.com/beshoo.sam"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fs-6" aria-hidden="true" />
            </a>
          </li>
          <li className="px-2">
            <a href="https://www.github.com/BeshoyS" target="_blank" rel="noreferrer">
              <i className="fab fa-github fs-6" aria-hidden="true" />
            </a>
          </li>
        </ul>
        </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
