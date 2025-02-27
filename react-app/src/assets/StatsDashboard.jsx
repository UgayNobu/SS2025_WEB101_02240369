import React from "react";
import "./StatsDashboard.css";

const StatsDashboard = ({ stats }) => {
  return (
    <div className="stats-dashboard">
      <h3>User Stats</h3>
      <p>Posts: <span className="stat">{stats.posts}</span></p>
      <p>Followers: <span className="stat">{stats.followers}</span></p>
      <p>Likes: <span className="stat">{stats.likes}</span></p>
    </div>
  );
};

export default StatsDashboard;

