import React from "react";
import "./ShuffleButton.css";

const ShuffleButton = () => {
  return (
    <button
      className="shuffle-button"
      aria-label="Shuffle Advice"
      type="submit"
      onClick={() => window.location.reload(false)}
    ></button>
  );
};

export default ShuffleButton;
