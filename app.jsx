import React, { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import EditForm from "./components/EditForm";
import StatsDashboard from "./components/StatsDashboard";

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "Web Developer & Tech Enthusiast",
    avatar: "https://via.placeholder.com/150",
    location: "New York, USA",
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <Header />
      {isEditing ? (
        <EditForm user={user} setUser={setUser} setIsEditing={setIsEditing} />
      ) : (
        <ProfileCard user={user} setIsEditing={setIsEditing} />
      )}
      <StatsDashboard />
    </div>
  );
}

export default App;
