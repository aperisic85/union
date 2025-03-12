import React from "react";
import "./Home.css"; // Uvezite CSS datoteku
import slika1 from "../assets/images/slika_1.jpeg";

const Home = ({}) => {
  const mockNews = [
    {
      id: 1,
      title: "Novosti",
      description: "Ovdje će biti novosti",
      image: { slika1 },
    },
    {
      id: 2,
      title: "Novosti",
      description: "Ovdje će biti novosti",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Novosti",
      description: "Ovdje će biti novosti",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="home-container">
      {" "}
      {/* Promijenjeno ime klase */}
      <h1>Novosti</h1>
      <button className="load-more">Prikaži još vijesti</button>
    </div>
  );
};

export default Home;
