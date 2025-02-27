import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ user, onEdit }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="Avatar" className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Job:</strong> {user.job}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default ProfileCard;
