import React from "react";

function ConditionalRendering(props) {
  //if....else
  const login = props.letMeCheck;

  if (login) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
  return (
    <div>
      <h2>ConditionalRendering</h2>
    </div>
  );
}

export default ConditionalRendering;
