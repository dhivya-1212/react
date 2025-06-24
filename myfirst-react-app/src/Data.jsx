import React from "react";
import CustomHook from "./CustomHook";

function Data() {
  const { data, loading } = CustomHook(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading....</p>;
  return (
    <div>
      {data.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default Data;
