import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 98765 43210",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzaZrWa-ku_NB3kA3w3Osy3IsGikhE7t9mw&s",
    notifications: true,
    darkMode: false,
  });

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profilePic: imageUrl });
    }
  };

  const saveProfile = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <div className="profile-pic">
          <img src={user.profilePic} alt="Profile" />
          {editMode && <input type="file" onChange={handleImageUpload} />}
        </div>

        <div className="profile-info">
          <h3>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            ) : (
              user.name
            )}
            <FaPencilAlt className="edit-icon" onClick={() => setEditMode(true)} />
          </h3>
          <div>
            <p>Email: {editMode ? <input type="email" name="email" value={user.email} onChange={handleChange} /> : user.email}</p>
            <p>Phone: {editMode ? <input type="text" name="phone" value={user.phone} onChange={handleChange} /> : user.phone}</p>
          </div>

          {editMode && (
            <div className="password-section">
              <h4>Change Password</h4>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}


          {editMode && (
            <div className="buttons">
              <button className="save-btn" onClick={saveProfile}>Save</button>
              <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
