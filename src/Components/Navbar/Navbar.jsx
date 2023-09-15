import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-4 fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white fs-2 fw-bold" to="/">START FRAMEWORK
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="menu_items navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white text-uppercase fw-bold" aria-current="page" to="about">About</NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink className="nav-link text-white text-uppercase fw-bold" to="portfolio">Portfolio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white text-uppercase fw-bold" aria-disabled="true" to="contacts">Contacts</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  )
}
