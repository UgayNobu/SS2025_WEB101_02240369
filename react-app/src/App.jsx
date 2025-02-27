import React, { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import EditForm from "./components/EditForm";
import StatsDashboard from "./components/StatsDashboard";
import "./App.css"; // (Optional: Add global styles)

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "Web Developer & Tech Enthusiast",
    avatar: "https://via.placeholder.com/150",
    location: "New York, USA",
    job: "Software Engineer", // Added missing job field
  });

  const [stats, setStats] = useState({
    posts: 10,
    followers: 500,
    likes: 1200,
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <main>
        {isEditing ? (
          <EditForm user={user} onSave={setUser} onCancel={() => setIsEditing(false)} />
        ) : (
          <ProfileCard user={user} onEdit={() => setIsEditing(true)} />
        )}
        <StatsDashboard stats={stats} />
      </main>
    </div>
  );
}

export default App;
