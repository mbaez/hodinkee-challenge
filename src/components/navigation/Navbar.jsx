import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/icon-hodinkee-logo.svg";
/**
 * Componente secundario que recibe los parametros del componente
 * padre de la página.
 *
 * @param {*} param
 */
export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="Hodinkee" />
        </a>

        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/posts" className="navbar-item">
            Latest Posts
          </Link>
          <Link to="/posts" className="navbar-item">
            Local Posts
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">&nbsp;</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
