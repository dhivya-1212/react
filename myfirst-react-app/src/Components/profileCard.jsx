import React from "react";
import propTypes from "prop-types";

function ProfileCard{{name, age, bio}}{
    return(
        <div style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            width: "250px",
        }}
        >
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>{bio}</p>
        </div>
    );
}

export default ProfileCard;