import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

function NavLinks({ toggle }) {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, path, icon } = link;
        return (
          <NavLink to={path} key={id} className="nav-link" onClick={toggle}>
            <span className="icon">{icon}</span> {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
