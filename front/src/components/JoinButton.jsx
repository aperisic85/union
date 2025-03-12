import React from "react";
import "./JoinButton.css"; // CSS datoteka za stilizaciju

const JoinButton = () => {
  return (
    <div className="join-container">
      <a href="/join" className="join-button">
        Učlani se u sindikat!
      </a>
    </div>
  );
};

export default JoinButton;
