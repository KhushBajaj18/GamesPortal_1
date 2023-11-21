//end.jsx
import React from "react";

export default function End(props) {
  return (
    <div className="end--card">
      <img className="end--image" src={props.end.imageurl} alt="end image" />
      <p>
        <button>Play Now</button>
      </p>
    </div>
  );
}