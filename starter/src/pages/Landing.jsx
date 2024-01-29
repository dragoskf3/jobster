import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingWrapper";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* INFO */}
        <div className="info">
          <h1>
            Job <span className="">Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            asperiores voluptatibus minima veritatis nemo vel ullam, molestiae
            et ad placeat maiores veniam cum aliquam, dolore dicta cumque a,
            ipsa soluta!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="jobHunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
