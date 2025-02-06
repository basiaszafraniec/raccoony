import React from "react";
import ProfileCard from "../components/profileComp";

const Profile = ({ users, profileInfo }) => {
  const masterUser = profileInfo?.["master-user"];

  return <ProfileCard user={masterUser} isEditable={true} />;
};

export default Profile;
