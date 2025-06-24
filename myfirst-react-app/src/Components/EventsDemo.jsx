import React from "react";

function EventsDemo() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse Entered!");
  };

  const handleMouseLeft = () => {
    console.log("Mouse Left");
  };

  const handleInputChange = (e) => {
    // setInputValue = e.target.value;
    console.log("Input Value:", e.target.value);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeft}
      >
        Hover or Click me
      </button>

      <div style={{ marginTop: "28px" }}>
        <input
          type="text"
          //   value={inputValue}
          placeholder="Type something.."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default EventsDemo;
