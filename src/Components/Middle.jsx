//middle.jsx
import React from "react";

export default function Middle(props) {
  return (
    <div className="middle--card">
      <img className="middle--image" src={props.middle.imageurl} alt="middle image" />
      <p>
        <button>Play Now</button>
      </p>
    </div>
  );
}