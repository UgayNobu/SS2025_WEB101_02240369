import React, { useState, useEffect } from "react";
import "./EditForm.css";

const EditForm = ({ user = {}, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
    job: "",
  });

  // Update formData when the user prop changes
  useEffect(() => {
    setFormData({
      name: user.name || "",
      bio: user.bio || "",
      location: user.location || "",
      job: user.job || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedData = {
      name: formData.name.trim(),
      bio: formData.bio.trim(),
      location: formData.location.trim(),
      job: formData.job.trim(),
    };
    onSave(trimmedData);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Bio:
        <input type="text" name="bio" value={formData.bio} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <label>
        Job:
        <input type="text" name="job" value={formData.job} onChange={handleChange} />
      </label>
      <div className="buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditForm;
