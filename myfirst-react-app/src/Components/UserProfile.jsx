import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Dhivya",
    age: "28",
    email: "dhivyatrp@gmail.com",
    location: "CBE",
  });

  const [hobbies, setHobbies] = useState(["Reading", "Travelling"]);
  const [newHobby, setNewHobby] = useState("");

  const handleUpdateLocation = () => {
    setUser((user) => ({
      ...user,
      location: "blore",
      state: "kerala",
    }));
  };

  const addHobby = () => {
    setHobbies((prevHobbies) => [...prevHobbies, newHobby]);
    setNewHobby("");
  };

  return (
    <div>
      <h2>userProfile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Location : {user.location}</p>
      <p>State: {user.state}</p>

      <button onClick={handleUpdateLocation}>Update location</button>

      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
        placeholder="Enter a new hobby"
      />

      <button onClick={addHobby} style={{ margin: "10px" }}>
        {" "}
        Add Hobby
      </button>
    </div>
  );
}
export default UserProfile;
