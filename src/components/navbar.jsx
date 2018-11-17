import React from "react";

// Stateless Functional Component

// Cannot use lifecycle functions in Functional Components
// If we need to use lifecycle functions, then we need to use a class to define the component

const NavBar = ({ totalCounters }) => {
  console.log("Navbar --- Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      {/* eslint-disable-next-line */}
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
