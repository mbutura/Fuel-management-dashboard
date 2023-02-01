import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
      <div class="container-fluid">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <NavLink to='/' className="navbar-brand">Home</NavLink>
            <NavLink to='/demo' className="navbar-brand">Demo</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;