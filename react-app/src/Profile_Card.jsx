import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ user = {}, onEdit }) => {
  return (
    <div className="profile-card">
      <img 
        src={user.avatar || "https://via.placeholder.com/150"} 
        alt={`${user.name || "User"}'s avatar`} 
        className="avatar" 
      />
      <h2>{user.name || "Unknown User"}</h2>
      <p>{user.bio || "No bio available."}</p>
      <p><strong>Location:</strong> {user.location || "Not specified"}</p>
      <p><strong>Job:</strong> {user.job || "Not specified"}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default ProfileCard;
