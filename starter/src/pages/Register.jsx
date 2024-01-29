import React from "react";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate, useNavigation } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, isMember, password, email } = values;
    if ((!name && !isMember) || !email || !password) return;
    if (isMember) {
      dispatch(loginUser({ email, password }));

      return;
    } else {
      dispatch(registerUser({ name, email, password }));
    }
  };

  const demoUserSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: "testUser@test.com", password: "secret" }));

    navigate("/");
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "login" : "register"}</h3>
        {!values.isMember && (
          <FormRow
            name="name"
            value={values.name}
            type="text"
            handleChange={handleChange}
            labelText="name"
          />
        )}
        <FormRow
          name="email"
          value={values.email}
          type="email"
          handleChange={handleChange}
          labelText="email"
        />
        <FormRow
          name="password"
          value={values.password}
          type="password"
          handleChange={handleChange}
          labelText="password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading" : "Submit"}
        </button>
        <button
          type="button"
          className="btn btn-block"
          disabled={isLoading}
          onClick={demoUserSubmit}
        >
          {isLoading ? "Loading" : "Demo User"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
