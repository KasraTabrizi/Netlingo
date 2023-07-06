import * as React from "react";
import User from "../components/User";
import addLoader from "../hoc/addLoader";

const UserWithLoader = addLoader(User);

const Profile = () => {
  return (
    <div className="profile__container">
      <h1>Profile</h1>
      <UserWithLoader />
    </div>
  );
};

export default Profile;
