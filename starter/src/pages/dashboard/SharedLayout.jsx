import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { SmallSidebar, BigSidebar, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SharedLayout() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;
