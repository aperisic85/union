import React from "react";
import "./NewsSection.css"; // CSS datoteka za stilizaciju
import slika1 from "../assets/images/slika_1.jpeg";
import slika2 from "../assets/images/kolektivni.jpg";

const NewsSection = () => {
  // Mock podaci za testiranje
  const newsData = [
    {
      id: 1,
      title: "Skupština sindikata Plovputa",
      description:
        "21.02.2025 održana je skupština sindikata na kojoj je odlučeno da se nastavi raditi.",
      image: slika1,
      time: "11 min",
    },
    {
      id: 2,
      title: "Kolektivni pregovori",
      description:
        "10.03.2025. Održan inicijalni sastanak za kolektivno pregovaranje...",
      image: slika2,
      time: "28 min",
    },
  ];

  return (
    <div className="news-section-container">
      {newsData.map((newsItem) => (
        <div className="news-item" key={newsItem.id}>
          <div className="news-image-container">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="news-image"
            />
            <span className="news-time">{newsItem.time}</span>
          </div>
          <div className="news-details">
            <h3 className="news-title">{newsItem.title}</h3>
            <p className="news-description">{newsItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
