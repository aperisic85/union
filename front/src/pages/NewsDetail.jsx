import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsDetail.css";
import slikaSkupstina from "../assets/images/skupstina_big.png";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsItem = async () => {
      setIsLoading(true);
      try {
        // Mock podaci - Dodajte pravi content ovdje!
        const mockNewsData = {
          1: {
            id: 1,
            title: "Skupština sindikata Plovputa",
            content:
              "Dana 11 veljače održana je skupština sindikata Plovputa... ",
            image: slikaSkupstina, // Veća slika
            time: "9 min",
            fullContent: [
              "Dana 11 veljače održana je skupština sindikata Plovputa.",
              "Dnevni red: 1.Izvješće o radu",
              "2.Izbor tijela sindikata",
              "3. Razno bla bla bla",
            ],
          },
          2: {
            id: 2,
            title: "Kolektivni pregovori",
            content:
              "Detalji o kolektivnim pregovorima... Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/1200x600", // Veća slika
            time: "28 min",
            fullContent: "Ovo je puni sadržaj vijesti...", // Puni sadržaj
          },
        };

        // Simuliraj asinkrono dohvaćanje
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Postavi podatke
        setNewsItem(mockNewsData[id] || null);
      } catch (error) {
        console.error("Error fetching news item:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (isLoading) {
    return <div className="loading-container">Učitavanje...</div>;
  }

  if (!newsItem) {
    return <div className="error-container">Vijest nije pronađena.</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="news-detail-container">
      {/* Header sa slikom i vremenom */}
      <div className="news-header">
        <img src={newsItem.image} alt={newsItem.title} className="news-image" />
      </div>

      {/* Naslov vijesti */}
      <h1 className="news-title">{newsItem.title}</h1>

      {/* Detaljni sadržaj vijesti */}
      <div className="news-content">
        <p>{newsItem.fullContent || newsItem.content}</p>{" "}
        {/* Puni sadržaj ako postoji */}
      </div>

      {/* Gumb za povratak */}
      <button onClick={goBack} className="back-button">
        &larr; Natrag na vijesti
      </button>
    </div>
  );
};

export default NewsDetail;
