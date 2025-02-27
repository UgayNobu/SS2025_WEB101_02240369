import React from "react";
import "./StatsDashboard.css";

const StatsDashboard = ({ stats = {} }) => {
  return (
    <div className="stats-dashboard">
      <h3>User Stats</h3>
      <p>Posts: <span className="stat" aria-live="polite">{stats.posts ?? 0}</span></p>
      <p>Followers: <span className="stat" aria-live="polite">{stats.followers ?? 0}</span></p>
      <p>Likes: <span className="stat" aria-live="polite">{stats.likes ?? 0}</span></p>
    </div>
  );
};

export default StatsDashboard;
