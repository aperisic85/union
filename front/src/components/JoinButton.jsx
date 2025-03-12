import React from "react";
import "./JoinButton.css"; // CSS datoteka za stilizaciju
import { Link } from "react-router-dom"; // Uvoz Link komponente

const JoinButton = () => {
  return (
    <div className="join-container">
      <Link to="/join" className="join-button">
        {" "}
        {/* Koristimo Link komponentu */}
        Postani član!
      </Link>
    </div>
  );
};

export default JoinButton;
