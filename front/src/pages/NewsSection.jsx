import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NewsSection.css";

const API_BASE_URL = "http://localhost:3000/"; // Prilagodite prema vašem API URL-u

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/news`);
        const formattedNews = response.data.map((item) => ({
          ...item,
          // Pretpostavka da API vraća createdAt timestamp
          time: new Date(item.createdAt).toLocaleDateString("hr-HR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          description: item.content.substring(0, 100) + "...", // Skraćeni opis
        }));
        setNewsData(formattedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Došlo je do greške pri učitavanju vijesti");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <div className="loading-container">Učitavanje vijesti...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="news-section-container">
      {newsData.map((newsItem) => (
        <Link
          to={`/news/${newsItem.id}`}
          key={newsItem.id}
          className="news-item-link"
        >
          <div className="news-item">
            <div className="news-image-container">
              {/* Dodajte realnu sliku iz API-ja ako postoji */}
              <img
                src={newsItem.image || "default-news-image.jpg"}
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
        </Link>
      ))}
    </div>
  );
};

export default NewsSection;
