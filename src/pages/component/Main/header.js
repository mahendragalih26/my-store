import React from "react";

const NavbarTop = (props) => {
  return (
    <div className="header">
      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarTop;
