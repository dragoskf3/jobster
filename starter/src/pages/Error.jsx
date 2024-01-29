import React from "react";
import Wrapper from "../assets/wrappers/ErrorWraper";
import { Link } from "react-router-dom";
import image from "../assets/images/not-found.svg";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={image} alt="Error image" />
        <h3>Ohh! Page not found</h3>
        <p>We can't seem to find this page!</p>
        <Link className="link-text" to="/">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
}

export default Error;
