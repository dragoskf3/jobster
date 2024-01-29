import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import { updateUser } from "../../features/user/userSlice";
function Profile() {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      console.log("fill the form");
      return;
    }
    dispatch(updateUser({ name, email, lastName, location }));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Wrapper>
      <form className="form " onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            name="name"
            type="text"
            value={userData.name}
            labelText="name"
            handleChange={handleChange}
          />
          <FormRow
            name="email"
            type="email"
            value={userData.email}
            labelText="email"
            handleChange={handleChange}
          />
          <FormRow
            name="lastName"
            type="text"
            value={userData.lastName}
            labelText="Lat Name"
            handleChange={handleChange}
          />
          <FormRow
            name="location"
            type="text"
            value={userData.location}
            labelText="Location"
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "updating" : "update"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile;
