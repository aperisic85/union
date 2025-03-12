import React from "react";
import "./Home.css"; // Uvezite CSS datoteku
import slika1 from "../assets/images/slika_1.jpeg";
import NewsSection from "./NewsSection";
const Home = ({}) => {
  return (
    <div className="home-container">
      {" "}
      {/* Promijenjeno ime klase */}
      <h1>Novosti</h1>
      <NewsSection />
      <button className="load-more">Prikaži još vijesti</button>
    </div>
  );
};

export default Home;
