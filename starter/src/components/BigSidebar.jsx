import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => {
    return store.user;
  });
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
