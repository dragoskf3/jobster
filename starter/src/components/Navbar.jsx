import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleSideBar } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={handleShowLogout}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className="drop-down show-dropdown"
            style={{ display: showLogout ? "flex" : "none", marginTop: "2px" }}
          >
            <button
              type="button"
              className="dropdown-btn"
              style={{ margin: "0 auto" }}
              onClick={() => {
                dispatch(logoutUser());
                navigate("/landing");
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
