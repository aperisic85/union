import React from "react";
import "./Home.css"; // Uvezite CSS datoteku
import slika1 from "../assets/images/slika_1.jpeg";
import NewsSection from "./NewsSection";
import JoinButton from "../components/JoinButton";

const Home = ({}) => {
  return (
    <div className="home-container">
      {" "}
      <h1>Novosti</h1>
      <NewsSection />
      <JoinButton />
      <button className="load-more">Prikaži još vijesti</button>
    </div>
  );
};

export default Home;
